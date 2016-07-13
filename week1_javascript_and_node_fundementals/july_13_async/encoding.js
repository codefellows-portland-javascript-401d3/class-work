const fs = require( 'fs' );

// fs.writeFileSync( 'ascii.txt', 'abcdef', { encoding: 'ascii' } );
// const file = fs.readFileSync( 'ascii.txt', { encoding: 'utf-8' } );

// const file = fs.readFileSync( '/Users/marty/codefellows/docs-and-slides/Endianness.pdf', { encoding: 'utf-8' } );
// console.log( file );

const buffer = fs.readFileSync( '/Users/marty/codefellows/docs-and-slides/Endianness.pdf' );
console.log( buffer instanceof Buffer );
