// const obj = new Object();

const obj = { name: 'foo' };

const n = 14; //new Number(14);
const hex = 0x3F;

const arr = [ 1, 3, 4 ];


const regex = /hi/i; // new RegExp( 'hi', 'i' );
// console.log( /hi/i.test( 'hiyya' ) );
const words = [ 'hiyya', 'biyya', 'hit' ];
words.forEach( word => console.log( word, regex.test( word ) ) )



