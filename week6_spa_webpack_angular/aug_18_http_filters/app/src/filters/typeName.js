
typeName.$inject = [ '$http' ];

export default function typeName( $http ) {
    let types = null;

    console.log( 'http...' );
    $http.get( 'http://localhost:3000/api/monkeys/types' )
        .then( r => types = r.data )
        .catch( err => console.log( err ) );

    function filter( id ) {
        if ( !types ) {
            console.log( 'no types :(' );
            return;
        }
        return types.find( t => t.id === id ).name;
    }

    filter.$stateful = true;

    return filter;
}