import template from './movie.html';

export default function list() {
    return {
        restrict: 'E',
        template,
        scope: {
            movie: '<',
            remove: '&'
        },
        controller: [ '$scope', function( $scope ) {
            $scope.removeMovie = () => {
                $scope.remove({ movie: $scope.movie });
            };
        }]
    };
}