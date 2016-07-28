const app = require( './lib/app' );
const http = require( 'http' );
const port = process.env.PORT || 3000;
const debug = require( 'debug' )( 'myapp.server' );
require( './lib/setup-mongoose' );

const server = http.createServer( app );
server.listen( port, () => {
	debug( 'server running at', server.address() );
});
