
monkeys.$inject = [ '$scope', '$http' ];

export default function monkeys( $scope, $http ) {
    // the error for display to the user 
    $scope.error = null;
    $scope.loaded = false;
    $scope.search = {};

    $scope.$watch( 'search.type', type => {
        if ( !type ) $scope.search.type = undefined;
    });

    // we need both monkeys AND types to work, so
    // use Promise.all to know when we are really "ready":
    $http.get( 'http://localhost:3000/api/monkeys' ).then( r => r.data )
        .then( monkeys => {
            $scope.monkeys = monkeys;
            $scope.loaded = true;
        })
        .catch( response => {
            $scope.error = response.data;
        });

    // formatting function used to display type name instead of id
    $scope.getType = function( typeId ) {
        return $scope.types.find( t => t.id === typeId ).name;
    };

}
