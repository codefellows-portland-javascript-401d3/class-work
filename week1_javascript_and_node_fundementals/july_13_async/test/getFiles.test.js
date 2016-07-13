const fs = require( 'fs' );
const path = require( 'path' );
const assert = require( 'assert' );

describe( 'getFiles', () => {

	it( 'gets test files', done => {
		getFiles( __dirname + '/test-dir', ( err, fileContents ) => {
			if ( err ) return done( err );
			assert.deepEqual( fileContents, [ 'bar', 'foo', 'qux' ] );
			done();
		});
	});

	it( 'errs on bad directory', done => {
		getFiles( __dirname + '/bad-dir', ( err, fileContents ) => {
			assert.ok( err );
			assert.ok( !fileContents );
			done();
		});
	});
	
});

function getFiles( directory, callback ) {

	fs.readdir( directory, ( err, files ) => {
		if ( err ) return callback( err );

		const contents = [];

		files.forEach( file => {
			fs.readFile( `${directory}/${file}`, { encoding: 'utf-8' }, ( err, content ) => {
				if ( err ) return callback( err );
				const length = contents.push( content );
				if ( length === files.length ) callback( null, contents );
			});
		});
	})
}