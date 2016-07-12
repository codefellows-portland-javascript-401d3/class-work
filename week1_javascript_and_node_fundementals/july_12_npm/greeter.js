const cool = require( 'cool-ascii-faces' );

module.exports = function greeter( greeting = 'hello' ) {
	return name => `${greeting || ''} ${name || ''}! ${cool()}`;
};