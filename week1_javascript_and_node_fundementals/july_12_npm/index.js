// console.log( 'hello node' );

// setTimeout( () => {
// 	console.log( 'hello 1 second later' );
// }, 1000 );


let name = 'foo';
const arr = [1,2,3,4,5,6,7,8,9,10];

for( var i = 0; i < arr.length; i++ ) {
	makeClosure(i);
}

function makeClosure(i) {
	setTimeout( () => {
		console.log( 'counter timeout', arr[i - 1], name );
	}, i * 100 );
}

setTimeout( () => {
	name = 'bar';
}, 500 );

arr.forEach( function( each, i ) {
	setTimeout( () => {
		console.log( 'counter timeout', arr[i - 1], name );
	}, i * 100 );
});
