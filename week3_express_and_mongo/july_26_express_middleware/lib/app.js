const express = require( 'express' );
const app = express();
const path = require( 'path' );
const logger = require( 'morgan' )( 'dev' );
const penguins = require( './routes/penguins' );
const debug = require( 'debug' )( 'myapp.app' );

// setup
app.use( logger );

// routes go here
app.use( '/api/penguins', penguins );

// you can externalize error and 404 handlers as well:
// app.use( errorHandler );
// app.use( notFoundHandler );

// module.exports = app;

// error and 404 handling
app.use( ( err, req, res, next ) => {
	debug( err );
	res.status( err.code || 500 )
		.send({ 
			error: err.error || err.message || err 
		});
});

app.use( ( req, res ) => {
	res.status( 404 )
		// example for custom file
		// .sendFile( path.resolve( __dirname + '/../public/404.html' ) );
		// but this is data api server, so stick with json:
		.send({
			error: `"${req.method} ${req.url} does not exist`
		})
});

module.exports = app;