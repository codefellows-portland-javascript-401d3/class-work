const cool = require( 'cool-ascii-faces' );

module.exports = function greeter( greeting ) {
	return person => `${greeting} ${person}! ${cool()}`;
};