const count = 100000;

const arr = [];

for ( var i = 0; i < count; i++ ) {
	arr[i] = `hello ${i}`;
}

function findDups( arr ) {
	const dups = Object.create(null);
	arr.forEach( ( each, j ) => {
		if( dups[ each ] ) return true;
		dups[ each ] = true;
		//if ( arr.indexOf( each, j + 1 ) !== -1 ) return true;
	});
	return false;
}
console.log( 'count', count );
console.time( 'find dups' );
console.log( findDups( arr ) );
console.timeEnd( 'find dups' );

// const hash = Object.create(null);
// console.log( hash.hasOwnProperty('toString') ? 'yes' : 'no' );