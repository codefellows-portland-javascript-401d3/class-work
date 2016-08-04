component.exports = {
	data() {
		return {
			type: 'in',
			showPassword: false,
			error: null,
			credentials: {
				username: '',
				password: ''
			}
		};
	},
	oninit() {
		const token = localStorage.token;
		if ( token ) this.getUser( token );
	},
	getUser( token ) {
		const url = '/api/auth/me';
		const headers = new Headers({ token });

		fetch( '/api/auth/me', { headers } )
			.then( res => {
                return res.json().then( body => {
					if( res.status !== 200 ) throw body.error
				    this.set( 'user', body );
				});
			})
			.catch( err => console.log( err ) );
	},
	submit() {
		this.event.original.preventDefault();
		this.set( 'error' );
		const url = `/api/auth/sign${this.get('type')}`;
		const credentials = this.get( 'credentials' );
		const options = { 
			method: 'POST', 
			body: JSON.stringify( this.get( 'credentials' ) ),
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		};

		fetch( url, options )
			.then( res => {
				return res.json().then( body => {
					if( res.status !== 200 ) throw body.error
					const { token } = body;
					localStorage.token = token;
					this.getUser( token );
				});
			})
			.catch( err => this.set( 'error', err ) );
	}
};