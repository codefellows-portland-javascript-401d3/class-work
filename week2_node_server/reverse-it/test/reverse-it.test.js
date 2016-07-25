const assert = require( 'assert' );
const reverse = require( '../lib/reverse-it' );

describe( 'reverse it', () => {

	it( 'reverses', () => {
		assert.equal( reverse( 'cat' ), 'tac' );
	});

	it( 'errs when not a string input', () => {
		assert.throws( () => {
			reverse( 2 );
		}, /input must be a string/ );
	});
	
});