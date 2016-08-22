import template from './movies.html';

export default function list() {
    return {
        restrict: 'E',
        template,
        scope: {
            movies: '<'
        },
        controller: [ '$scope', function( $scope ) {

            $scope.add = movieToAdd => {
                $scope.movies.push(movieToAdd);
            };

            $scope.remove = movieToRemove => {
                console.log( 'removeFromList', movieToRemove );
                const index = $scope.movies.indexOf( movieToRemove );
                if ( index > -1 ) $scope.movies.splice( index, 1 );
            };
        }]
    };
}