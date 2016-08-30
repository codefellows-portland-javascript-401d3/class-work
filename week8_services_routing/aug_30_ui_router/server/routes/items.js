const router = require( 'express' ).Router();
const jsonBody = require( 'body-parser' ).json();
const Item = require( '../models/Item' );

router
	.get( '/', ( req, res, next ) => {
		Item.find({ list: req.listId })
			.then( todoItems => res.send( todoItems ) )
			.catch( next );
	})
	.get( '/:id', ( req, res, next ) => {
		Item.findById( req.params.id )
			.then( item => res.send( item ) )
			.catch( next );
	})
	.post( '/', jsonBody, ( req, res, next ) => {
		req.body.list = req.listId;
		new Item( req.body ).save()
			.then( item => res.send( item ) )
			.catch( next );
	})
	.put( '/:id', jsonBody, ( req, res, next ) => {
		const { task, done } = req.body;
		Item.findById( req.params.id )
			.then( item => {
				item.task = task;
				item.done = done;
				return item.save();
			})
			.then( item => res.send( item ) )
			.catch( next );
	})
	.delete( '/:id', ( req, res, next ) => {
		Item.findByIdAndRemove( req.params.id )
			.then( item => res.send( item ) )
			.catch( next );
	});

module.exports = router;