/* globals angular, chai */

const { assert } = chai;

describe( 'new-movie-form', () => {

    beforeEach( angular.mock.module( 'components' ) );
    
    let $component;
	beforeEach(angular.mock.inject( $componentController => {
        // component controller is a function we can call to 
        // create component controller instances
		$component = $componentController;
	}));

    function testResetMovie( movie ) {
        assert.ok( movie, 'movie object should exist' )
        assert.notOk( movie.title, 'movie should not have title' );
        assert.notOk( movie.genre, 'movie should not have genre' );
    }

    it( 'initializes with empty new movie', () => {
        // pass the name of the controller
        // and the bindings we want to pass 
        // as key/values of an object
        const component = $component( 'newMovieForm');
        const movie = component.movie;
    });

    it( 'calls add with new movie and clears out local movie', () => {

        let addedMovie = null;
        const add = movie => {
            addedMovie = movie; 
        };

        const component = $component( 'newMovieForm', null, { add });
        testResetMovie( component.movie )
        
        movie.title = "new movie";
        movie.genre = "some genre";
        
        component.submit();
        assert.deepEqual( addedMovie, movie );
        testResetMovie( component.movie );
    });
});