const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
// const Pirate = require( './pirate' );

const crew = new Schema({
	name: {
		type: String,
		required: true
	},
	flag: String
});

// add an "instance" method, ie crew.fooinate()
// crew.methods.fooinate = function(){}

// add "static" method, ie. Crew.getFullDetail
crew.statics.getFullDetail = function( id ) {
	return Promise
		.all([
			this.findById( id ).lean(),
			Pirate.find({ crewId: id }).lean()
		])
		.then( ([ crew, pirates ]) => {
			crew.pirates = pirates;
			return crew;
		});
};

crew.statics.exists = function( id ) {
	return this
		.findById( id )
		.count()
		.then( count => count === 1 );
}


module.exports = mongoose.model( 'Crew', crew );