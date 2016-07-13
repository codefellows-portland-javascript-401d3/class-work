

function doSomeWork( input ) {
	const output = input + 'work';
	return output;
}

const result = doSomeWork( 'hello' );
console.log( result );

function doSomeAsyncWork( input, callback ) {
	setTimeout( () => {
		if ( input === 'goodbye' ) return callback( 'goodbye not allowed' );
		const output = input + 'work';
		// how to communicate errors?
		callback( null, output );
	});
}
function valueIsBack( output ){
	console.log( output );
}

doSomeAsyncWork( 'hello again', ( err, output ) => {
	if ( err ) console.error( err );
	else {
		console.log( 'hello again', output );
	}
});

doSomeAsyncWork( 'goodbye', ( err, output ) => {
	if ( err ) return console.error( err );
	console.log( 'goodbye', output );
});