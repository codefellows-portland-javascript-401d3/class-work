const chai = require( 'chai' );
const chaiHttp = require( 'chai-http' );
const assert = chai.assert;
chai.use( chaiHttp );

// start the db connection, store so we can close when done
const connection = require( '../../lib/setup-mongoose' );

const app = require( '../../lib/app' );

describe( 'pirate API', () => {

	before( done => {
		const drop = () => connection.db.dropDatabase( done );
		if ( connection.readyState === 1 ) drop();
		else {
			connection.on( 'open', drop );
		}
	});

	let token = '';

	before( done => {
		request
			.post( '/api/auth/signup' )
			.send({ username: 'a', password: 'b' })
			.then( res => assert.ok( token = res.body.token ) )
			.then( done, done );
	});

	const request = chai.request( app );

	const luffy = {
		name: 'Monkey D Luffy',
		rank: 'captain'
	};

	it( '/GET all', done => {
		request
			.get( '/api/pirates' )
			.set({ token })
			.then( res => {
				assert.deepEqual( res.body, [] );
				done();
			})
			.catch( done );
	});

	it( '/POST', done => {
		request
			.post( '/api/pirates' )
			.set({ token })
			.send( luffy )
			.then( res => {
				const pirate = res.body;
				assert.ok( pirate._id );
				luffy.__v = 0;
				luffy._id = pirate._id;
				done();
			})
			.catch( done );

	});

	it( '/GET by id', done => {
		request
			.get( `/api/pirates/${luffy._id}` )
			.set({ token })
			.then( res => {
				const pirate = res.body;
				assert.deepEqual( pirate, luffy );
				done()
			})
			.catch( done );
	});

	it( '/GET all after post', done => {
		request
			.get( '/api/pirates' )
			.set({ token })
			.then( res => {
				assert.deepEqual( res.body, [ luffy ] );
				done();
			})
			.catch( done );
	});

	it( 'add a non-captain pirate', done => {
		request
			.post( '/api/pirates' )
			.set({ token })
			.send({ name: 'zoro', rank: 'swordsman' })
			.then( res => {
				assert.ok( res.body._id );
				done();
			})
			.catch( done );
	})

	it( '/GET where rank is captain', done => {
		request
			.get( '/api/pirates' )
			.set({ token })
			.query({ rank: 'captain' })
			.then( res => {
				assert.deepEqual( res.body, [ luffy ] );
				done();
			})
			.catch( done );
	});
});
