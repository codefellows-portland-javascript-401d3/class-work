const net = require( 'net' );
const Chat = require( './chat' );
const chat = new Chat();

const server = net.createServer( socket => chat.add( socket ) );

module.exports = server;