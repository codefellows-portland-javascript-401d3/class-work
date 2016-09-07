const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const bcrypt = require( 'bcrypt' );

const userSchema = new Schema({
	username: String,
	email: String,
	password: String,
	roles: [ String ]
}, { 
	strict: false // allow oauth ids and profiles
});

userSchema.methods.generateHash = function( password ) {
	return this.password = bcrypt.hashSync( password, 8 );
};

userSchema.methods.compareHash = function(password) {
	return bcrypt.compareSync( password, this.password );
};

module.exports = mongoose.model( 'User', userSchema );