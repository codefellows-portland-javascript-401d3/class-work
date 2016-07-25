const chai = require( 'chai' );
const chaiHttp = require( 'chai-http' );
const assert = chai.assert;
const app = require( '../lib/app' );

chai.use( chaiHttp );

describe( 'api server', () => {

	const request = chai.request( app );

	describe( 'post saves and retrieves', () => {

		const penguin = {
			name: 'pengy',
			type: 'emporer'
		};
		// let penguinId;

		it ( 'initial get has no penguins', done => {
			request
				.get( '/penguins' )
				.then( penguins => {
					assert.equal( penguins.length, 0 );
					done();
				})
				.catch( done );
		});

		it( 'post returns id', done => {
			request
				.post( '/dogs' )
				.send( penguin )
				.then( newPenguin => {
					assert.equal( res.statusCode, 200 );
					assert.ok( newPenguin.id );
					// penguinId = newPenguin.id;
					penguin.id = newPenguin.id;
					done()
				})
				.catch( done );
		});

		it( '/GET id returns saved penguind', done => {
			request
				.get( `/penguins/${penguin.id}` )
				.then( retrievedPenguin => {
					assert.deepEqual( retrievedPenguin, penguin );
					done();
				})
				.catch( done );
		});
	
	});
});