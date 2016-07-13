const http = require( 'http' );


let i = 1;

http.createServer( ( req, res ) => {
	res.write( 'hello world!' );
	res.write( 'you are vistor ' + i++ )
	res.end();
	console.log( req.url );
	if( req.url === '/bad' ) throw new Error( 'bad request' );
}).listen( 3000 );