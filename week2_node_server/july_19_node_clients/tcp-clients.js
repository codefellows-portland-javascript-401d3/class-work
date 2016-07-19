const net = require( 'net' );

net.createServer( socket => {} ).listen( 65000 );

const client = net.connect( 65000, () => {
	console.log( 'connect listener' );
})

client.on( 'connect', () => {
	console.log( 'on connect' );
})