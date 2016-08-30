const express = require( 'express' );
const app = express();
const lists = require( '../routes/lists' );
const cors = require( './cors' )( '*' );

app.use( express.static( __dirname + '/public' ) );
app.use( cors );
app.use( '/api/todos', lists );

module.exports = app;