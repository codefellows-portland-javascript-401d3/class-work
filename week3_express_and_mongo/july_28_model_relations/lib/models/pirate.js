const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

/* Pirate is included directly in sub-document
 or, it's id is included directly in parent */ 
// const pirate = new Schema({
// 	name: {
// 		type: String,
// 		required: true
// 	},
// 	rank: {
// 		type: String,
// 		default: 'crew'
// 	}
// });

/* Crew id is included for each pirate */ 
const pirate = new Schema({
	name: {
		type: String,
		required: true
	},
	rank: {
		type: String,
		default: 'crew'
	},
	crewId: {
		// FYI - mongoose won't validate that this is actual id
		type: Schema.Types.ObjectId,
		// Whatever you called in mongoose.model( 'THIS_NAME_HERE', schema )
		ref: 'Crew',
		// if required, make it so:
		// require: true
	}
});

module.exports = mongoose.model( 'Pirate', pirate );