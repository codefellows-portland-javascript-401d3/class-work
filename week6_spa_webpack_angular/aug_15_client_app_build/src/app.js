import './main.css';
import angular from 'angular';

const app = angular.module( 'myApp', [] );

app.controller( 'main', function( $scope ) {
	$scope.name = 'world';
});
