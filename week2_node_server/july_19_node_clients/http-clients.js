const http = require( 'http' );
const fs = require( 'fs' );

//http.createServer( ( req, res ) => {} ).listen( 8000 );

var options = {
  hostname: 'www.google.com',
  port: 80,
  method: 'GET'
};

const req = http.request( options, res => {
	res.pipe( fs.createWriteStream( 'request.html') ); 
});

req.end();