const net = require( 'net' );

let i = 0;
const clients = [];

const server = net.createServer( client => {
	clients.push( client );

	client.name = `name ${i++}`;

	client.setEncoding( 'utf-8' );

	client.on( 'data', data => {
		clients.forEach( c => {
			if ( c === client ) return;
			c.write( `${client.name} sez: ${data.toUpperCase()}` ); 
		});
	});

	client.on( 'close', () => {
		const index = clients.indexOf( client );
		if ( index !== -1 ) clients.splice( index, 1 );
		console.log( 'client', client.name, 'closed' );
	});
});

server.listen( 65000, () => {
	address = server.address();
	console.log( 'opened server on', address );
});