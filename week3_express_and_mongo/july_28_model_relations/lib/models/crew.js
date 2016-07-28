const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

/* model child pirates as sub document */
// const Pirate = require( './pirate' );
// const crew = new Schema({
// 	name: {
// 		type: String,
// 		required: true
// 	},
// 	flag: String,
// 	pirates: [ Pirate.schema ]
// });

/* model pirates as id's included in parent */
// const crew = new Schema({
// 	name: {
// 		type: String,
// 		required: true
// 	},
// 	flag: String,
// 	pirates: [{
// 		// FYI - mongoose won't validate that this is actual id
// 		type: Schema.Types.ObjectId,
// 		// Whatever you called in mongoose.model( 'THIS_NAME_HERE', schema )
// 		ref: 'Pirate'
// 	}]
// });

/* model pirates as having key to crew id (parent in child) */

const crew = new Schema({
	name: {
		type: String,
		required: true
	},
	flag: String
});

module.exports = mongoose.model( 'Crew', crew );