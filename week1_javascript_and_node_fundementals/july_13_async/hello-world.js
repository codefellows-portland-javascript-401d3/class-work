const http = require( 'http' );


let i = 1;

http.createServer( ( req, res ) => {
	res.write( 'hello world!' );
	res.write( 'you are vistor ' + i++ )
	res.end();
}).listen( 3000 );