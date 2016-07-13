

function doSomeWork( input ) {
	const output = input + 'work';
	return output;
}

const result = doSomeWork( 'hello' );
console.log( result );

function doSomeAsyncWork( input, callback ) {
	setTimeout( () => {
		const output = input + 'work';
		// how to communicate errors?
		callback( output );
	});
}
function valueIsBack( output ){
	console.log( output );
}

doSomeAsyncWork( 'hello again', output => {
	console.log( 'hello again', output );
});

doSomeAsyncWork( 'goodbye', output => {
	console.log( 'goodbye', output );
});
