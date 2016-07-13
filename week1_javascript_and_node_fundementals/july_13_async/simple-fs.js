const fs = require( 'fs' );

fs.readFile( 'README.md', ( err, data ) => {
	console.log( data );
})

console.log( 'done' );