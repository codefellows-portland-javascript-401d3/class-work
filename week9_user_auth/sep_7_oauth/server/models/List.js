const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const options = require( './options' );

const schema = new Schema({
	name: { 
		type: String, 
		required: true 
	}
}, options );

module.exports = mongoose.model( 'List', schema );