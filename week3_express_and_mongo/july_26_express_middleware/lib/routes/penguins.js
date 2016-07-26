const express = require( 'express' );
const bodyParser = require( 'body-parser' ).json();
const Penguin = require( '../models/penguin' );
const router = express.Router();

module.exports = router
	.get( '/', ( req, res, next ) => {
		Penguin.getAll()
			.then( penguins => res.send( penguins ) )
			.catch( next );
	})
	.get( '/:id', ( req, res, next ) => {
		Penguin.get( req.params.id )
			.then( penguin => res.send( penguin ) )
			.catch( next );
	})
	.delete( '/:id', ( req, res, next ) => {
		Penguin.delete( req.params.id )
			.then( deleted => res.send( deleted ) )
			.catch( next );
	})
	.post( '/', bodyParser, ( req, res, next ) => {
		Penguin.add( req.body )
			.then( saved => res.send( saved ) )
			.catch( next );
	})
	.put( '/:id', bodyParser, ( req, res, next ) => {
		Penguin.update( req.params.id, req.body )
			.then( saved => res.send( saved ) )
			.catch( next );
	});

