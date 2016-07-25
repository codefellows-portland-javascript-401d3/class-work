
const foo = 'FOO';
const obj = {
	name: 'the object',
	greet() {
		return `hello ${this.name} ${foo}`;
	}
}

function sayHello( greeting, timeOfDay ) {
	return `${greeting} ${this.name}, isn\'t it a lovely ${timeOfDay}`;
}

// console.log( sayHello.call( { name: 'sally' }, 'hello', 'morning' ) );
// console.log( sayHello.apply( { name: 'sally' }, [ 'hello', 'morning' ] ) );

// const greet = obj.greet.bind( obj );
// console.log( greet.call( { name: 'bob' } ) );

// obj.foo = sayHello;

// const greet = obj.greet
// console.log( greet.call( obj ) );

// console.log( obj.greet() );
// console.log( sayHello() );
// console.log( obj.foo() );
// console.log( greet() );

// console.log( sayHello.call( { name: 'bob' } ) );

const obj2 = {
	name: 'jill',
	greet() {
		return new Promise( ( resolve, reject ) => {
			setTimeout( () => {
				resolve( `hello ${this.name}` );
			});
		});

	}
}

// const greet = obj2.greet().then( console.log );

const fn = () => { return this.name };

console.log( 'fn without', fn() );

console.log( 'fn with call', fn.bind( { name: 'got context?' } )() );


const obj3 = {
	name: 'bill',
	greet() { return `hello ${this.name}`; }
}


