const readline = require( 'readline' );

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

process.stdout.write('hello world!\n');

rl.question('What do you think of today? ', (answer) => {
	// TODO: Log the answer in a database
	console.log('Thank you for your valuable feedback:', answer);

	rl.close();
});