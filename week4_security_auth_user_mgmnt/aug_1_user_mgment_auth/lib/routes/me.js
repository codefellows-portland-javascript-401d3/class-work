const router = require( 'express' ).Router();
const bodyParser = require( 'body-parser' ).json();
const User = require( '../models/user' );

router
	.get( '/me', ( req, res, next ) => {
		User.findById( req.user.id )
			.select( '_id username roles')
			.then( user => res.send( user ) )
			.catch( next )
	});
	
	
module.exports = router;