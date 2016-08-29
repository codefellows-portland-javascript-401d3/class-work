const express = require( 'express' );
const bodyParser = require( 'body-parser' ).json();
const Movie = require( '../models/movie' );
const router = express.Router();

module.exports = router
    .get( '/', ( req, res, next ) => {
        Movie.find()
            .then( movies => res.send( movies ) )
            .catch( next );
    })
    .get( '/:id', ( req, res, next ) => {
        Movie.findById( req.params.id )
            .then( movie => res.send( movie ) )
            .catch( next );
    })
    .delete( '/:id', ( req, res, next ) => {
        Movie.findByIdAndRemove( req.params.id )
            .then( deleted => res.send( deleted ) )
            .catch( next );
    })
    .post( '/', bodyParser, ( req, res, next ) => {
        new Movie( req.body ).save()
            .then( saved => res.send( saved ) )
            .catch( next );
    })
    .put( '/:id', bodyParser, ( req, res, next ) => {
        Movie.findByIdAndUpdate( req.params.id, req.body, { new: true } )
            .then( saved => res.send( saved ) )
            .catch( next );
    });
