require( './lib/config-mongoose' );
const app = require( './lib/app' );
const morgan = require( 'morgan' );
const http = require( 'http' );
const port = process.env.PORT || 3000;

app.use( morgan( 'dev' ) );

const server = http.createServer( app );

server.listen( port );
server.on( 'listening', () => console.log( 'server listening:', server.address() ) );
server.on( 'error', err => console.error( `server error: ${err}` ) );