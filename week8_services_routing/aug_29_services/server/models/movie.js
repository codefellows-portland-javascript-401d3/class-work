const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const movie = new Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    }
}, {
    //schema level options
    // this adds createdAt and updatedAt fields to our model
    timestamps: true
});

module.exports = mongoose.model( 'Movie', movie );
