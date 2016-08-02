const express = require( 'express' );
const bodyParser = require( 'body-parser' ).json();
const Crew = require( '../models/crew' );
const crewPirates = require( './crew-pirates' );
const router = express.Router();

module.exports = router
	.get( '/', ( req, res, next ) => {
		const query = {};
		if ( req.query.rank ) query.rank = req.query.rank;
		Crew.find(query)
			.then( crews => res.send( crews ) )
			.catch( next );
	})
	.post( '/', bodyParser, ( req, res, next ) => {
		new Crew( req.body ).save()
			.then( saved => res.send( saved ) )
			.catch( next );
	})
	.get( '/:id', ( req, res, next ) => {
		Crew.getFullDetail( req.params.id )
			.then( crew => res.send( crew ) )
			.catch( next );
	})
	.delete( '/:id', ( req, res, next ) => {
		Crew.removeById( req.params.id )
			.then( deleted => res.send( deleted ) )
			.catch( next );
	})
	.put( '/:id', bodyParser, ( req, res, next ) => {
		Crew.findbyIdAndUpdate( req.params.id, req.body )
			.then( saved => res.send( saved ) )
			.catch( next );
	})
	.use( crewPirates );

