const http = require( 'http' );
const fs = require( 'fs' );

module.exports = http.createServer( ( req, res ) => {
	if ( req.url === '/dogs' ) {
		res.writeHead( 302, {
  			'Location': '/'
		});
		res.end();
	}
	else if ( req.method === 'GET' ) {
		res.writeHead( 200, { 'Content-Type': 'text/html' } );
		fs.createReadStream( 'index.html' ).pipe( res )
	}	
	else if( req.method === 'POST' ) {
		let body = '';
		req.on( 'data', chunk => body += chunk );
		req.on( 'end', () => {
			console.log( body );
			res.statusCode = 200;
			res.end( 'thanks for the post!' );
		});
	} 
	else {
		res.statusCode = 404
		res.end( 'not found' );
	}
});