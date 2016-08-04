const express = require( 'express' );
const bodyParser = require( 'body-parser' ).json();
const Pirate = require( '../models/pirate' );
const router = express.Router();
const restify = require( 'express-restify-mongoose' );

restify.serve(router, Pirate, {
	prefix: '/api',
	version: '',
	name: 'pirates'
});

module.exports = router;