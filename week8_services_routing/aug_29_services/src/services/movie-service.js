listService.$inject = [ '$http', 'apiUrl' ];

export default function listService( $http, apiUrl ) {

    return {
        getAll() {
            return $http.get( `${apiUrl}/movies` )
                .then( response => response.data );
        },

        add( movie ) {
            return $http.post( `${apiUrl}/movies`, movie )
                .then( response => response.data );
        },

        remove( movie ) {
            return $http.delete( `${apiUrl}/movies/${movie._id}` )
                .then( response => response.data );
        },

        update( movie ) {
            return $http.put( `${apiUrl}/movies/${movie._id}`, movie )
                .then( response => response.data );
            
        }
    };
}