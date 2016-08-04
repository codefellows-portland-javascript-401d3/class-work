const express = require( 'express' );
const Crew = require( '../models/crew' );
const Pirate = require( '../models/pirate' );
const router = express.Router();

module.exports = router
	.put( '/:id/pirates/:pirateId', ( req, res, next ) => {
		Pirate.findById( req.params.pirateId )
			.then( pirate => {
				if ( !pirate ) throw new Error( `pirate id ${req.params.pirateId} does not exist` );
				return pirate.addToCrew( req.params.id );
			})
			.then( pirate => res.send( pirate ) )
			.catch( next );
	})
	.delete( '/:id/pirates/:pirateId', ( req, res, next ) => {
		Pirate.findById( req.params.pirateId )
			.then( pirate => {
				if ( !pirate ) throw new Error( `pirate id ${req.params.pirateId} does not exist` );
				return pirate.addToCrew( req.params.id );
			})
			.then( pirate => res.send( pirate ) )
			.catch( next );

		const crewId = req.params.id;
		Pirate.findById( req.params.pirateId )
			.then( pirate => {
				if ( !pirate ) throw new Error( `pirate id ${req.params.pirateId} does not exist` );
				return pirate.awol();
			})
			.then( pirate => res.send( pirate ) )
			.catch( next );
	});

