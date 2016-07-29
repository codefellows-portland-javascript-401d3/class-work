const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const Crew = require( './crew' );


const pirate = new Schema({
	name: {
		type: String,
		required: true
	},
	rank: {
		type: String,
		default: 'crew'
	},
	/* Crew id is included for each pirate */ 
	crewId: {
		// FYI - mongoose won't validate that this is actual id
		type: Schema.Types.ObjectId,
		// Whatever you called in mongoose.model( 'THIS_NAME_HERE', schema )
		ref: 'Crew',
		// if required, make it so:
		// require: true
	}
});

function setCrew( pirate, existingId, idToSet ) {
	return Crew.exists( existingId )
		.then( exists => {
			if ( !exists ) throw new Error( `crew id ${crewId} does not exist` );
		})
		.then( () => {
			pirate.crewId = idToSet;
			return pirate.save({ new: true });
		});
}

/* we could add an instance method, but then it would be "exposed" as an API */
// pirate.methods.setCrew = function( existingId, idToSet ) {
// 	return Crew.exists( existingId )
// 		.then( exists => {
// 			if ( !exists ) throw new Error( `crew id ${crewId} does not exist` );
// 		})
// 		.then( () => {
// 			this.crewId = idToSet;
// 			return this.save();
// 		});
// }

pirate.methods.addToCrew = function( crewId ) {
	return setCrew( this, crewId, crewId );
}

pirate.methods.awol = function( crewId ) {
	return setCrew( this, crewId, null );
}

module.exports = mongoose.model( 'Pirate', pirate );