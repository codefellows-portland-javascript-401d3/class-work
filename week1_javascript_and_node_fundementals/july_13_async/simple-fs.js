const fs = require( 'fs' );

fs.readFile( './test/test-dir/bar.txt', ( err, data ) => {
	console.log( data );
})

console.log( 'done' );