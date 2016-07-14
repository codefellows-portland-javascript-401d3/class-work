const storeFactory = require( '../lib/storeFactory' );
const path = require( 'path' );
const assert = require( 'chai' ).assert;
const rimraf = require( 'rimraf' );

describe( 'file store', () => {

	const dir = './test-dir';
	
	describe( 'factory', () => {

		it( 'creates resolved base directory on factory create', done => {
			storeFactory( dir, ( err, store ) => {
				if ( err ) return done ( err );
				assert.equal( store.basePath, path.resolve( dir ) );
				done();
			});
		});

	});

	describe( 'data storage', () => {

		let store = null, savedObj = null;
		before( done => {
			rimraf( dir, err => {
				if ( err ) return done( err );
				storeFactory( dir, ( err, newStore ) => {
					if ( err ) return done( err );
					store = newStore;
					done();
				});
			});
		});

		it( 'returns stored data', done => {
			const obj = { name: 'foo', type: 'generic' };
			store.save( obj, ( err, obj )=> {
				if ( err ) return done( err );
				assert.ok( obj.id != null );
				assert.equal( obj.name, obj.name );
				assert.equal( obj.type, obj.type );
				savedObj = obj;
				done();
			});
		});

		it( 'reads saved object by id', done => {
			store.get( savedObj.id, ( err, obj ) => {
				if ( err ) return done( err );
				assert.deepEqual( obj, savedObj );
				done();
			})
		});
	});

});