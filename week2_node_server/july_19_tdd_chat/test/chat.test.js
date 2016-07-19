const assert = require( 'chai' ).assert;
const Chat = require( '../lib/chat' );
const EventEmitter = require( 'events' );

describe( 'chat', () => {

	class MockClient extends EventEmitter {
		write( message ) {
			this.message = message;
		}
	}

	it( 'client joins and gets a name and is greeted with a name', () => {
		const chat = new Chat();
		const client = new MockClient();

		assert.equal( chat.clients.length, 0 );
		assert.ok( !client.name );

		chat.add( client );
		
		assert.equal( chat.clients.length, 1 );
		assert.ok( client.name );

		assert.equal( client.message, 'hello client 1' );
	});

	it( 'client sends a message, other client gets message', () => {
		const chat = new Chat();
		const client1 = new MockClient();
		const client2 = new MockClient();

		chat.add( client1 );
		chat.add( client2 );
		client1.message = '';
		client2.message = '';

		client1.emit( 'data', 'hello world' );

		assert.equal( client1.message, '' );
		assert.equal( client2.message, 'client 1: hello world' );
	});

	it( 'client leaves and is removed', () => {
		const chat = new Chat();
		const client = new MockClient();

		chat.add( client );

		client.emit( 'close' );

		assert.equal( chat.clients.length, 0 );
	});

});

