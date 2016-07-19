const chai = require( 'chai' );
const chaiHttp = require( 'chai-http' );
const assert = chai.assert;
const app = require( '../lib/app' );

chai.use( chaiHttp );

describe( 'api server', () => {

	const request = chai.request( app );

	it( 'returns 404 for non-penguin path', done => {
		request
			.get( '/dogs' )
			.end( ( err, res ) => {
				assert.ok( err );
				assert.equal( res.statusCode, 404 );
				done();
			});
	});

	it( 'returns list of penguins on GET /penguins', done => {
		request
			.get( '/penguins' )
			.end( ( err, res ) => {
				if ( err ) return done( err );
				assert.equal( res.statusCode, 200 );
				assert.equal( res.header['content-type'], 'application/json' )
				assert.deepEqual( res.body, [] );
				done();
			});
	});
});