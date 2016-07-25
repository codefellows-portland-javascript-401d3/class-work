const assert = require( 'assert' );

module.exports = function reverseIt( input ) {
	assert( typeof input === 'string', 'input must be a string' );
	return input.split('').reverse().join('');
}