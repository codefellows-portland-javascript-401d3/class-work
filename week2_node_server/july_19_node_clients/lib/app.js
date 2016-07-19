const http = require( 'http' );

module.exports = http.createServer( ( req, res ) => {
	if ( !req.url.startsWith( '/penguins') ) {
		res.statusCode = 404;
		res.end();
		return
	}

	res.statusCode = 200;
	res.setHeader( 'Content-Type', 'application/json' );
	res.write( JSON.stringify([]) );
	res.end();
});