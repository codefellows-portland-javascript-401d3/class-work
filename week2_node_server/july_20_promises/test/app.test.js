const chai = require( 'chai' );
const chaiHttp = require( 'chai-http' );
const assert = chai.assert;

chai.use( chaiHttp );

const app = require( '../app' );

describe( 'our app', () => {
	const request = chai.request( app );

	it( 'gets root /', done => {
		request
			.get( '/' )
			.then( res => {
				assert.equal( res.status, 200 );
				assert.equal( res.headers['content-type'], 'text/html' );
				assert.ok( res.text );
				done();
			})
			.catch( done );
	});

	// not working :(
	// it( 'responds with redirect on /dogs', done => {
	// 	request
	// 		.get( '/dogs' )
	// 		.redirects(0)
	// 		.then( res => {
	// 			done( 'unexpected 200 response' );
	// 		})
	// 		.catch( res => {
	// 			assert.equal( res.status, 302 );
	// 			assert.equal( res.header[ 'Location' ], '/' );
	// 			done();
	// 			console.log( res.status, res.header );
	// 		})
	// 		.catch( done );
	// });

	it( 'responds with 404 on PUT', done => {
		request
			.put( '/' )
			.then( res => {
				done( 'success handler not expected' );
			})
			.catch( err => {
				assert.equal( err.status, 404 );
				done();
			})
			.catch( done );
	})
})
