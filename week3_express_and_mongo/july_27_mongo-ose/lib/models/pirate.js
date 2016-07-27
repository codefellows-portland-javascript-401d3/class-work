const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const pirate = new Schema({
	name: {
		type: String,
		required: true
	},
	rank: {
		type: String,
		default: 'crew'
	}
}
// schema level options
, {
	// this adds createdAt and updatedAt fields to our model
	// timestamps: true
});

module.exports = mongoose.model( 'Pirate', pirate );