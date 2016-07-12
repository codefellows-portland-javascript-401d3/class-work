
module.exports = function greeter( greeting = 'hello' ) {
	return name => `${greeting} ${name}!`;
};