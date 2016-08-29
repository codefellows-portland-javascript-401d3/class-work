const express = require( 'express' );
const app = express();
const morgan = require( 'morgan' );
const movies = require( './routes/movies' );

app.use( morgan( 'dev' ) );

app.use( express.static( __dirname + '/public' ) );

app.use( ( req, res, next ) => {
    const url = '*';
    res.header( 'Access-Control-Allow-Origin', url );
    res.header( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE' );
    res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
    next();
});

app.use( '/api/movies', movies );

module.exports = app;