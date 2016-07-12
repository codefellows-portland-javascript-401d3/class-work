const assert = require( 'assert' );
const greeter = require( '../greeter' );

describe( 'greeter', () => {
	it( 'creates greeting function', () => {
		const greet = greeter( 'hello' );
		assert.equal( greet( 'world' ), 'hello world!' );
	});

	it( 'uses "hello" as default greeting', () => {
		const greet = greeter();
		assert.equal( greet( 'world' ), 'hello world!' );
	});
});