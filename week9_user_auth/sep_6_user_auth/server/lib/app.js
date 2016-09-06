const express = require( 'express' );
const app = express();
const lists = require( '../routes/lists' );
const auth = require( '../routes/auth' );
const cors = require( './cors' )( '*' );
const ensureAuth = require( './ensureAuth' );

app.use( express.static( __dirname + '/public' ) );
app.use( cors );
app.use( '/api', auth );
app.use( '/api/todos', ensureAuth, lists );

module.exports = app;