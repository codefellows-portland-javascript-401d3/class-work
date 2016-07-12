const assert = require( 'chai' ).assert;
const greeter = require( '../greeter' );

describe( 'greeter', () => {
	it( 'creates greeting function', () => {
		const greet = greeter( 'hello' );
		assert.match( greet( 'world' ), /hello world!/ );
	});
});