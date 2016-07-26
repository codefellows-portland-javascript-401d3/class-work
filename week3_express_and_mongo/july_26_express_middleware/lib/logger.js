const url = require( 'url' );
module.exports = function getLogger() {
	return function logger( req, res, next ) {
		console.log( req.method, req.url );
		next();
	}
};