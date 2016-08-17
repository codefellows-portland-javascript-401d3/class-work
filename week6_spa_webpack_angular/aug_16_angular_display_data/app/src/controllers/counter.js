
export default function counter( $scope, $timeout ) {
	$scope.count = 0;

	$scope.add = function() {
		$scope.count++;
	};

	$scope.subtract = function() {
		$scope.count--;
	};

	$scope.half = function( number ) {
		return number/2;
	};

	$timeout( function(){
		$scope.add();
	}, 1000);
}


