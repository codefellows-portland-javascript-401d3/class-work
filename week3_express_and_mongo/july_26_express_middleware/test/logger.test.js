const getLogger = require( '../lib/logger' );
const assert = require( 'chai' ).assert;

describe( 'logger middleware', () => {

	it( 'logs url and path', () => {
		const logger = getLogger();

		const req = { method: 'GET', url: '/foo' };

		let nextCalled = false;
		const next = () => {
			nextCalled = true;
		};

		const realLog = console.log;
		let logged = null;
		const log = ( method, url ) => logged = { method, url };

		console.log = log;
		logger( req, null, next );
		console.log = realLog;

		assert.deepEqual( logged, req );
		assert.ok( nextCalled, 'next not called' );
	});
});