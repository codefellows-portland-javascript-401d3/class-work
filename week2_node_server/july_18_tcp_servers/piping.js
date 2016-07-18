const fs = require( 'fs' );

// const filepath = '../../../../docs-and-slides/treesday2.key';
const filepath = 'tcp.js';
const readStream = fs.createReadStream( filepath, { encoding: 'utf-8' } );

// pipe does chunking work for us
readStream.pipe( process.stdout );

// let i = 0;
// readStream.on( 'data', data => {
// 	i++;
// 	process.stdout.write( data );
// });

// readStream.on( 'end', () => {
// 	process.stdout.write( '\n\n****************\n\nall done! ' + i + ' chunks\n\n' );
// });
