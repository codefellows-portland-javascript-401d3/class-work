const Pirate = require( '../lib/models/pirate' );
const assert = require( 'chai' ).assert;

describe( 'pirate', () => {

	it( 'requires name', done => {
		const pirate = new Pirate(/* we're not passing initialization data */);
		// validate our pirate model
		pirate.validate( err => {
			// we "expect" it to fail, so if no err, test *fails*
			if ( !err ) done( 'expected name required error' );
			// otherwise it passes
			else done();
		});
	});

	it( 'defaults to crew for rank', done => {
		const pirate = new Pirate({ name: 'Lackey' });
		pirate.validate( () => {
			assert.equal( pirate.rank, 'crew' );
			done();
		});
	});

	// it( 'rank must be a string', done => {
	// 	const pirate = new Pirate({ name: 'lucky', rank: [] });
	// 	pirate.validate( err => {
	// 		console.log( err );
	// 		if ( !err ) done( 'expected rank not string error' );
	// 		else done();
	// 	});
	// });
});