/* globals angular, chai */

const { assert } = chai;

describe( 'movie service', () => {

    let $httpBackend = null, movieService = null;

    beforeEach( 
        angular.mock.module( 'services', { apiUrl: '/api' } )
    );
    
    beforeEach( angular.mock.inject( ( _movieService_, _$httpBackend_ ) => {
        $httpBackend = _$httpBackend_;
        movieService = _movieService_;
    }));

    afterEach( () => {
        // make sure the $httpBackend expectations that we set up
        // have actually happened
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it( 'GET all movies', done => {
        
        const movies = [ 1, 2, 3];
        
        $httpBackend
            // what http VERB and url are we expecting?
            .expectGET( '/api/movies' )
            // mock a reponse that will get set on the .data 
            // property of $http response object
            .respond( movies );

        movieService.getAll()
            .then( allMovies => {
                // $httpBackend serializes the object we pass to
                // .respond, so to "test" we need to do 
                // deepEqual as they are no longer the same object reference
                assert.deepEqual( allMovies, movies );
                done();
            })
            .catch( done );

        // we need to tell $httpBackend everything is setup and okay
        // to "flush" (send) reponses back
        $httpBackend.flush();
    });

    it( 'POST new movie', done => {

        const newMovie = { title: 'Star Trek II Wrath of Khan', genre: 'sci fi' };
        const mockReturnObject = { __v: 0, title: 'Star Trek II Wrath of Khan', genre: 'sci fi' };

        $httpBackend
            .expectPOST( '/api/movies', newMovie )
            .respond( mockReturnObject );

        movieService.add( newMovie )
            .then( addedMovie => {
                assert.deepEqual( addedMovie, mockReturnObject );
                done();
            })
            .catch( done );

        $httpBackend.flush();
    });


    it( 'DELETE movie', done => {

        const movie = { _id: 1, title: 'Star Trek II Wrath of Khan', genre: 'sci fi' };
        const mockReturnObject = { _id: 1, title: 'Star Trek II Wrath of Khan', genre: 'sci fi' };

        $httpBackend
            .expectDELETE( '/api/movies/1' )
            .respond( mockReturnObject );

        movieService.remove( movie )
            .then( removedMovie => {
                assert.deepEqual( removedMovie, mockReturnObject );
                done();
            })
            .catch( done );

        $httpBackend.flush();
    });

});