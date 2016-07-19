const foo = { bar: 3, bizz: 'buzz' };

const obj1 = Object.create( foo );
const obj2 = Object.create( foo );

console.log( 'has proto props', obj1.bar, obj1.bizz );
console.log( 'same proto?', obj1.__proto__ === obj2.__proto__ );

const emptyObj = Object.create( null );

function Foo() {
	this.city = 'pdx';
}

Foo.prototype.qux = function(){};
Foo.prototype.seed = 1;

const fooObj = new Foo();

// "new" deconstructed"
function fauxNew(){
	const fauxFoo = Object.create( Foo.prototype );
	const returned = Foo.call( fauxFoo );
	return returned || fauxFoo;
}

const fauxFoo = fauxNew();

console.log( fooObj, fauxFoo );

function Bar( name ) {
	Foo.call( this );
	this.name = name;
}

Bar.prototype = Object.create( Foo.prototype );
Bar.prototype.sayHello = function(){};

const bar1 = new Bar( 'one' );
const bar2 = new Bar( 'two' );

Bar.prototype.late = 'added afterwards';

// Qux.prototype = Object.create( Foo.prototype );
// Qux.prototype.sayGoodbye = function(){};

class Foo1 {
	constructor(){
		this.city = 'pdx'
	}

	qux() {

	}

	get seed() {}
}

class Bar1 extends Foo {
	constructor( name ) {
		super();
		this.name = name;
	}
}

const barOne1 = new Bar1( 'classy Bar' );
console.log( barOne1 );
