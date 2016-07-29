const assert = require( 'chai' ).assert;
const EventEmitter = require( 'events' );

// SUT (System Under Test)
function bodyParser( req, res, next ) {
	let body = '';
	req.on( 'data', chunk => body += chunk );
	req.on( 'end', () => {
		req.body = JSON.parse( body );
		next();
	});
}

describe( 'bodyParser', () => {

	it( 'parse data', done => {
		const post = { foo: 'FOO' };
		const req = new EventEmitter();

		const next = () => {
			assert.deepEqual( req.body, post );
			done();
		}

		bodyParser( req, null, next );

		req.emit( 'data', JSON.stringify( post ) );
		req.emit( 'end' );
	});
});


