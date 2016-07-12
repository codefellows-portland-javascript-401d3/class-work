const assert = require( 'chai' ).assert;
const greeter = require( '../greeter' );

describe( 'greeter', () => {

	const match = /^hello world! /;
	
	it( 'creates greeting function', () => {
		const greet = greeter( 'hello' );
		const greeting = greet( 'world' );
		assert.match( greeting, match );
		assert.ok( greeting.replace( match, '' ).trim() );
	});

	it( 'uses "hello" as default greeting', () => {
		const greet = greeter();
		assert.match( greet( 'world' ), match );
	});

	it( 'no name greeting', () => {
		const greet = greeter();
		assert.match( greet(), /^hello !/ );
	});
});