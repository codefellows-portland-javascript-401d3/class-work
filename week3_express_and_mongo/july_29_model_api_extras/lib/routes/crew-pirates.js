const express = require( 'express' );
const Crew = require( '../models/crew' );
const Pirate = require( '../models/pirate' );
const router = express.Router();

module.exports = router
	.put( '/:id/pirates/:pirateId', ( req, res, next ) => {

		const crewId = req.params.id;
		Promise
			.all([
				// make sure crew id exists
				Crew.findById( crewId ).count(),
				// get pirate so we can add to crew
				Pirate.findById( req.params.pirateId )
			])
			.then( result => {
				const crewCount = result[0];
				const pirate = result[1];

				if ( crewCount !== 1 ) throw new Error( `crew id ${crewId} does not exist, cannot add pirate` );
				if ( !pirate ) throw new Error( `pirate id ${req.params.pirateId} does not exist` );

				pirate.crewId = crewId;
				return pirate.save();
			})
			.then( pirate => res.send( pirate ) )
			.catch( next );
	})
	.delete( '/:id/pirates/:pirateId', ( req, res, next ) => {

		const crewId = req.params.id;
		Pirate.findById( req.params.pirateId )
			.then( pirate => {
				if ( !pirate ) throw new Error( `pirate id ${req.params.pirateId} does not exist` );
				if ( pirate.crewId != crewId ) throw new Error( `invalid request, pirate not in this crew` );
				pirate.crewId = null;
				return pirate.save();
			})
			.then( pirate => res.send( pirate ) )
			.catch( next );
	});

