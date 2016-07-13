
let thing = null;

function someAsynWork( cb ) {
	if ( thing ) {
		process.nextTick( () => {
			cb( null, thing );
		});
	}
	else {
		// expensive thing
		setTimeout( () => {
			thing = {};
			cb( null, thing );
		}, 5000 );
	}	
}
console.log( 'before code' );

someAsynWork( (err, result ) => {
	console.log( 'async work #1 complete' );
	
	someAsynWork( (err, result ) => {
		console.log( 'async work #2 complete' );
	});

	console.log( 'after second call' );
})

console.log( 'after code' );
