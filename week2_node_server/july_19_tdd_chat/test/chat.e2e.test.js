const server = require( '../lib/server' );
const net = require( 'net' );
const assert = require( 'chai' ).assert;
const port = 65000;

describe( 'chat server', () => {

	before( done => {
		server.listen( port, done );
	});

	describe( 'client chats', () => {
		let client1 = null;
		let client2 = null;

		before( done => {
			client1 = net.connect( { port }, () => {
				client2 = net.connect( { port }, done );
				client2.setEncoding( 'utf-8' );
			});
		});

		it( 'sends and recieves messages', done => {
			client2.on( 'data', data => {
				if( data === 'hello client 2' ) return;
				assert.equal( data, 'client 1: hello world' );
				done();
			});
			client1.write( 'hello world' );
		});
	});


	after( done => {
		server.close();
		done();
	});
});