
export default function counter( $scope ) {
    $scope.count = 1;

    $scope.add = function() {
        $scope.count++;
    };

    $scope.subtract = function() {
        $scope.count--;
    };

    $scope.half = function( number ) {
        return number/2;
    };
}


