/* globals angular, chai */

const { assert } = chai;
const { mock } = angular;

describe( 'user service', () => {

    let $httpBackend = null, userService = null;

	let token = null,
		removed = false;

	const tokenService = {
		get() {
			return token;
		},
		set( tokenToSet ) {
			token = tokenToSet;
		},
		remove() {
			removed = true;
		}
	};

    beforeEach( 
        mock.module( 'services', { 
			apiUrl: '/api',
			tokenService
		})
    );

	beforeEach( () => {
		token = null;
		removed = false;
	});
    
    beforeEach( mock.inject( ( _userService_, _$httpBackend_ ) => {
        $httpBackend = _$httpBackend_;
        userService = _userService_;
    }));

    afterEach( done => {
        // make sure the $httpBackend expectations 
		// that we set up have actually happened
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
		done();
    });

	it( 'isAuthenticated', done => {
		assert.notOk( userService.isAuthenticated() );
		token = 'ABC';
		assert.ok( userService.isAuthenticated() );
		done();
	});

	it( 'logout', done => {
		userService.logout();
		assert.ok( removed );
		done();
	});

    it( 'signin', done => {
        
        const apiToken = { token: 'ABC' };
		const credentials = { username: 'demo', password: 'demo' };
        
        $httpBackend
            // what http VERB and url are we expecting?
            .expectPOST( '/api/signin', credentials )
            // mock a reponse that will get set on the .data 
            // property of $http response object
            .respond( apiToken );

        userService.signin( credentials )
            .then( () => {
				// user service simply sets the token in the token service
                assert.deepEqual( token, apiToken.token );
                done();
            })
            .catch( done );

        // we need to tell $httpBackend everything is setup and okay
        // to "flush" (send) reponses back
        $httpBackend.flush();

    });


});