// this is a npm package that reads .env and
// puts values on process.env
// require('dotenv').config();

// other option is to use something like env $(cat .env)

const app = require( './lib/app' );
const http = require( 'http' );
const port = process.env.PORT || 3000;
const debug = require( 'debug' )( 'myapp.server' );
require( './lib/setup-mongoose' );

const server = http.createServer( app );
server.listen( port, () => {
	debug( 'server running at', server.address() );
});
