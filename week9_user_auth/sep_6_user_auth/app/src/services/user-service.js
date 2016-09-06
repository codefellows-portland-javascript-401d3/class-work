userService.$inject = [ 'tokenService', '$http', 'apiUrl' ];

export default function userService( token, $http, apiUrl ) {

	const current = token.get();
	if ( current ) {
		$http.get( `${apiUrl}/verify` )
			.catch( () => token.remove() );
	}
    
    function credential( endpoint ) {
        return ( credentials ) => {
            return $http.post( `${apiUrl}/${endpoint}`, credentials )
            .then( result => {
                token.set( result.data.token );
            })
            .catch( err => {
                throw err.data; 
            });
        };
    }

	return {
        // do we have a token?
		isAuthenticated() {
			return !!token.get();
		},
        // remove the token
		logout() {
			token.remove();
		},
        // call API and set token
		signin: credential( 'signin' ),
        // call API and set token
		signup: credential( 'signup' )
	};
}
