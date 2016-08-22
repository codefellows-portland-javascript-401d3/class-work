import template from './add-new-movie.html';

export default function list() {
    return {
        restrict: 'E',
        template,
        scope: {
            add: '&'
        },
        controller: [ '$scope', function( $scope ) {

            function resetMovie() {
                $scope.movie = {};
            }

            resetMovie();

            $scope.submit = () => {
                $scope.add({ movie: $scope.movie });
                resetMovie();
            };
        }]
    };
}