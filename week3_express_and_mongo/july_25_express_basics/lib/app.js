const express = require( 'express' );
const app = express();
const path = require( 'path' );
const Penguin = require( './models/penguin' );

const publicPath = path.resolve( __dirname, '../public' );
app.use( express.static( publicPath ) );

app.set( 'view engine', 'pug' );

app.get( '/template', ( req, res ) => {
	res.render( 'cute', { title: 'Hey', message: req.query.name });
});

app.get( '/', ( req, res ) => {
	const indexHtml = path.resolve( __dirname, '../index.html' );
	res.sendFile( indexHtml );
});

app.get( '/api/penguins', ( req, res ) => {
	Penguin.getAll()
		.then( penguins => res.send( penguins ) )
		.catch( err => {
			res.status( 500 ).send({ error: err });
		});
});

app.get( '/api/penguins/:id', ( req, res ) => {
	Penguin.get( req.params.id )
		.then( result => {
			if ( result.msg === 'fail' ) throw `The id ${req.params.id} does not exist`;
			res.send( result );
		})
		.catch( err => {
			res.status( 500 ).send({ error: err });
		});
});

app.delete( '/api/penguins/:id', ( req, res ) => {
	Penguin.delete( req.params.id )
		.then( result => {
			if ( result.msg === 'fail' ) throw `The id ${req.params.id} does not exist`;
			res.send( result );
		})
		.catch( err => {
			res.status( 500 ).send({ error: err });
		});
});

app.post( '/api/penguins', ( req, res ) => {
	let body = '';
	req.on( 'data', d => body += d );
	req.on( 'end', () => {
		if( !body ) {
			res.status( 400 ).send({
				error: 'No penguin data provided'
			});
		}
		else {
			const penguin = JSON.parse( body );
			Penguin.add( penguin )
				.then( saved => res.send( saved ) )
				.catch( err => {
					res.status( 500 ).send({ error: err });
				});
		}
	});
});

app.put( '/api/penguins/:id', ( req, res ) => {
	let body = '';
	req.on( 'data', d => body += d );
	req.on( 'end', () => {
		if( !body ) {
			res.status( 400 ).send({
				error: 'No penguin data provided'
			});
		}
		else {
			const penguin = JSON.parse( body );
			Penguin.update( req.params.id, penguin )
				.then( saved => res.send( saved ) )
				.catch( err => {
					res.status( 500 ).send({ error: err });
				});
		}
	});
});

module.exports = app;