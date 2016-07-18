const http = require( 'http' );
const fs = require( 'fs' );

const indexPage = fs.createReadStream( 'index.html' );

const server = http.createServer( ( req, res ) => {
	console.log( req.method, req.url );
	
	if( req.url === '/' ) {
		indexPage.pipe( res );
	}
	else {
		res.statusCode = 200;
		res.setHeader( 'Content-Type', 'text/html' );
		res.write( '<p>hello world</p>' );
		res.write( '<p>yo yo</p>' );
		res.end();
	}


});

server.listen( '8000', () => {
	console.log( 'opened server on',  server.address() );
})