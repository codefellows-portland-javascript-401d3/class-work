const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const options = require( './options' );

const schema = new Schema({
	task: { 
		type: String, 
		required: true 
	},
	done: {
		type: Boolean,
		default: false	
	},
	list: {
		type: Schema.Types.ObjectId,
		ref: 'List',
		required: true
	}
}, options );

module.exports = mongoose.model( 'Item', schema );