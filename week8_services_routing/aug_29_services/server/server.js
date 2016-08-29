const app = require( './app' );
const http = require( 'http' );
const port = process.env.PORT || 3000;
require( './setup-mongoose' );

const server = http.createServer( app );
server.listen( port, () => {
    console.log( 'server running at', server.address() );
});