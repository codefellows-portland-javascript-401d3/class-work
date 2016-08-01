const debug = require( 'debug' )( 'myapp.error' );

module.exports = function getErrorHandler() {
	return ( err, req, res, next ) => {
		debug( err );
		res.status( err.code || 500 )
			.send({ 
				error: err.error || err.message || err 
			});
	};
};