const express = require( 'express' );
const app = express();
const path = require( 'path' );
const logger = require( 'morgan' )( 'dev' );
const errorHandler = require( './errorHandler' )();
const notFound = require( './notFound' )();

const ensureAuth = require( './auth/ensureAuth' )();
const ensureRole = require( './auth/ensureRole' );

const auth = require( './routes/auth' );
const crews = require( './routes/crews' );
const pirates = require( './routes/pirates' );
const me = require( './routes/me' );
const users = require( './routes/users' );

// setup
// app.use( logger );

// routes go here
app.use( '/api/auth', auth )
app.use( '/api/crews', ensureAuth, crews );
app.use( '/api/pirates', ensureAuth, pirates );
app.use( '/api/users', ensureAuth, me );
app.use( '/api/users', ensureAuth, ensureRole( 'admin' ), users );

// 404 and error handlers
app.use( notFound );
app.use( errorHandler );


module.exports = app;