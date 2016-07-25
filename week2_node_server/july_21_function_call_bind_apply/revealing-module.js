

function Foo( name, dob ) {

	const age = calcAge( dob );
	const foo = 'sekrit';

	return {
		name,
		bar() {
			if ( foo === 'sekrit' ) {

			}
		}
	}

}

class Foo2 {
	constructor(){
		this.age = calcAge( dob );
		this._foo = 'sekrit';
	}

	bar() {
		if ( this._foo === 'sekrit' ) {

		}
	}
}