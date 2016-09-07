const router = require( 'express' ).Router();
const jsonParser = require( 'body-parser' ).json();
const User = require( '../models/user' );
const token = require( '../lib/token' );
const ensureAuth = require( '../lib/ensureAuth' );
const request = require( 'request' );
const qs = require( 'qs' );

router.post('/signup', jsonParser, ( req, res ) => {
	const { username, password } = req.body;
	delete req.body.password;
	
	if ( !password ) {
		return res.status(400).json({
			msg: 'You probably want to include a password!'
		});
	}
	
	User.findOne({ username })
		.then( existing => {
			if ( existing ) {
				return res.status(500).json({
					msg: 'didn\'t work',
					reason: 'username already exists'
				});
			}
			
			const user = new User( req.body );
			user.generateHash( password );
			return user.save()
				.then( user => token.sign( user ) )
				.then( token => res.json({ token }) );
				
		})
		.catch( err => {
			res.status(500).json({
				msg: 'didn\'t work',
				reason: err
			});
		});
});

router.post('/signin', jsonParser, ( req, res ) => {
	const { username, password } = req.body;
	delete req.body;
	
	User.findOne({ username })
		.then( user => {
			
			if ( !user ) {
				return res.status(400).json({
					msg: 'authentication sez no!',
					reason: 'no user ' + username
				});
			}
			
			if ( !user.compareHash( password ) ) {
				return res.status(400).json({
					msg: 'authentication sez no!',
					reason: 'password doesn\'t match!'
				});
			}
			
			token.sign( user ).then( token => res.json({ token }) );
		})
		.catch( err => {
			res.status(500).json({
				msg: 'didn\'t work',
				reason: err
			});
		});
	
});

router.get('/verify', ensureAuth, ( req, res ) => {
	res.status( 200 ).send( { success: true } );
});


const requestTokenUrl = 'https://api.twitter.com/oauth/request_token';
const accessTokenUrl = 'https://api.twitter.com/oauth/access_token';
const profileUrl = 'https://api.twitter.com/1.1/users/show.json?screen_name=';
const TWITTER_KEY = process.env.TWITTER_KEY;
const TWITTER_SECRET = process.env.TWITTER_SECRET;

router.post('/twitter', jsonParser, ( req, res, next ) => {

	// Part 1 of 2: Initial request from Satellizer.
	if ( !req.body.oauth_token || !req.body.oauth_verifier ) {

		const requestTokenOauth = {
			consumer_key: TWITTER_KEY,
			consumer_secret: TWITTER_SECRET,
			callback: req.body.redirectUri
		};

		// Step 1. Obtain request token for the authorization popup.
		request.post({ 
			url: requestTokenUrl, 
			oauth: requestTokenOauth 
		}, (err, response, body) => {
			if ( err ) return res.status( 500 ).send( err );
			const oauthToken = qs.parse(body);
			// Step 2. Send OAuth token back to open the authorization screen.
			res.send( oauthToken );
		});
	} else {
	// Part 2 of 2: Second request after Authorize app is clicked.
		const accessTokenOauth = {
			consumer_key: TWITTER_KEY,
			consumer_secret: TWITTER_SECRET,
			token: req.body.oauth_token,
			verifier: req.body.oauth_verifier
		};

		// Step 3. Exchange oauth token and oauth verifier for access token.
		request.post({ 
			url: accessTokenUrl, 
			oauth: accessTokenOauth 
		}, ( err, response, accessToken ) => {
			accessToken = qs.parse(accessToken);

			const profileOauth = {
				consumer_key: TWITTER_KEY,
				consumer_secret: TWITTER_SECRET,
				oauth_token: accessToken.oauth_token
			};

			// Step 4. Retrieve profile information about the current user.
			request.get({
				url: profileUrl + accessToken.screen_name,
				oauth: profileOauth,
				json: true
			}, ( err, response, profile ) => {
				// Step 5a. Link user accounts.
				// if ( req.header( 'Authorization' ) ) {
				// 	console.log( 'have auth header',  req.header( 'Authorization' ) );
					// User.findOne({ twitter: profile.id })
					// 	.then( existingUser => {
					// 		// if (existingUser) {
					// 		//   return res.status(409).send({ message: 'There is already a Twitter account that belongs to you' });
					// 		// }

					// 		const token = req.header( 'Authorization' ).split(' ')[1];
					// 		const payload = jwt.decode(token, config.TOKEN_SECRET);

					// 		User.findById( payload.sub, function(err, user) {
					// 			if (!user) {
					// 				return res.status(400).send({ message: 'User not found' });
					// 			}

					// 			user.twitter = profile.id;
					// 			user.displayName = user.displayName || profile.name;
					// 			user.picture = user.picture || profile.profile_image_url.replace('_normal', '');
					// 			user.save( err => {
					// 				res.send({ token: createJWT(user) });
					// 			});
					// 		});
					// 	});
				// } else {
					// Step 5b. Create a new user account or return an existing one.
				User.findOne({ twitter: profile.id })
					.then( existingUser => {
						if (existingUser) return existingUser;
						
						return new User({
							twitter: profile.id,
							twitterProfile: {
								accessToken: accessToken,
								displayName: profile.name,
								picture: profile.profile_image_url.replace('_normal', '')
							}
						}).save();

					})
					.then( user => token.sign( user ) )
					.then( token => res.send({ token }) )
					.catch( next );

				// }
			});
		});
	}
});

module.exports = router;