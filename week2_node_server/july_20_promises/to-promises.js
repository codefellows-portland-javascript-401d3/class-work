const fs = require( 'fs' );

function getFile( file ) {

	return new Promise( ( resolve, reject ) => {
		console.log( 'reading file' );
		fs.readFile( file, { encoding: 'utf-8' }, ( err, data ) => {
			if ( err ) reject( err );
			else resolve( data );
		});
	});

};

// getFile( 'file-name.txt' )
// 	.then( fileName => {
// 		console.log( 'fileName is', fileName );
// 		if ( fileName === 'to-promises.js' ) throw new Error( 'no promise files allowed!' );
// 		return getFile( fileName )
// 	})
// 	.then( fileContents => {
// 		console.log( fileContents );
// 	})
// 	.catch( err => {
// 		console.error( 'ERROR:', err );
// 		return getFile( 'really-bad-file-name' );
// 	})
// 	.then( result => console.log( 'result is', result ) );

const files = [
	'file-name.txt' ,
	'to-promises.js' ,
	'bad.js'
];

const arrayOfPromises = files.map( f => getFile( f ) );

Promise.all( arrayOfPromises )
	.then( contents => console.log( contents ) )
	.catch( console.error );

