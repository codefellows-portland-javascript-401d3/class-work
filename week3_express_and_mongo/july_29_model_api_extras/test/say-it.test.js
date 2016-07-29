'use strict';

const assert = require( 'chai' ).assert;

/* SUT (System Under Test) */

// this version requires "use strict";
function sayIt1( word ) {
	const words = this ? this.words : [];
	if ( !word ) {
		return words.join( ' ' );
	}
	else {
		words.push( word );
		return { words, sayIt };
	}
}

function sayIt2( word ) {
	const words = [];
	return doSay( word );

	function doSay( word ) {
		if ( !word ) {
			return words.join( ' ' );
		}
		else {
			words.push( word );
			return { sayIt: doSay };
		}
	}
}

class Accumulator {
	constructor( word ) {
		this.words = [ word ];
	}

	sayIt( word ) {
		if ( word ) {
			this.words.push( word );
			return this;
		}
		return this.words.join( ' ' );
	} 
}

function sayIt( word ) {
	if ( !word ) return '';
	return new Accumulator( word );
}

describe.only( 'say it', () => {

	it( 'says stuff', () => {
		assert.equal( sayIt( 'hello' ).sayIt( 'world' ).sayIt(), 'hello world' );
	});

	it( 'says nuffin on one empty call', () => {
		assert.equal( sayIt(), '' );
	});
});


