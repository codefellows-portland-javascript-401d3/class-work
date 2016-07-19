const server = require( './lib/server' );

server.listen( 65000, () => {
	address = server.address();
	console.log( 'tcp server started on', address );
});