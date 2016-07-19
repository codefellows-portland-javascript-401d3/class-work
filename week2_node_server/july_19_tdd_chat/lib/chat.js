
module.exports = class Chat {

	constructor() {
		this.clients = [];
		this.seed = 1;
	}
	
	add( client ) { 
		client.name = `client ${this.seed++}`
		this.clients.push( client );
		client.write( `hello ${client.name}` );
		
		client.on( 'data', data => {
			this.broadcast( client, data );
		});

		client.on( 'close', () => {
			const index = this.clients.indexOf( client );
			if ( index !== -1 ) this.clients.splice( index, 1 );
		});
	}

	broadcast( client, data ) {
		this.clients.forEach( c => {
			if ( c === client ) return;
			c.write( `${client.name}: ${data}` );
		});
	}

};