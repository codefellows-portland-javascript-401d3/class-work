const fs = require( 'fs' );

fs.readFile( './palette-bitmap.bmp', ( err, buffer ) => {
	if ( err ) return console.error( err );
	const offset = buffer.readInt16LE( 10 );
	console.log( offset );
});
