const tokenChecker = require( './token' );

module.exports = function getEnsureAuth() {

	return function ensureAuth( req, res, next ) {
		const token = req.headers.token;

		// didn't provide a token
		if( !token ) {
			return next({
				code: 400,
				error: 'unauthorized, no token provided'
			});
		}

		tokenChecker.verify( token )
			.then( user => {
				// valid token!

				// assign payload to req so subsequent routes
				// have user id and roles info
				req.user = user;
				
				/* if we wanted/needed details from db */
				// User.findById( user.id )
				// 	.then( user => {
				// 		//check is exists
				// 		if ( !user ) { /*...*/ }
				// 		// assign whatever info we need to request
				// 		req.user = {
				// 			/* add info here */
				// 		};
				// 	})

				next();

			})
			.catch( () => {
				// token was invalid
				return next({
					code: 403,
					error: 'unauthorized, invalid token'
				})
			})

	};

};