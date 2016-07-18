const fs = require( 'fs' );
const stream = require( 'stream' );

const lineTransform = new stream.Transform({
	transform: function(chunk, encoding, next) {
		const lines = chunk.toString().split( '\n' );
		lines.forEach( l => this.push( l + '\n' ) );
		// this.push( chunk.toString().toUpperCase() );
		next();
	},
	/* We can omit this because no work to be done */
	// flush: function(done) {
	// 	done();
	// }
});

const reverse = new stream.Transform({
	transform: function(chunk, encoding, next) {
		const reversed = chunk.toString().split('').reverse().join('');
		this.push( reversed );
		next();
	}
});

const filepath = 'tcp.js';
const readStream = fs.createReadStream( filepath, { encoding: 'utf-8' } );
readStream
	.pipe( lineTransform )
	.pipe( reverse )
	.pipe( process.stdout );
