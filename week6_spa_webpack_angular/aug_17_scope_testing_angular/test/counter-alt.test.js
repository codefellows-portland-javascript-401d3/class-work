/* globals angular, chai */
const { assert } = chai;

describe( 'counter controller', () => {

    angular.mock.module.sharedInjector();
    before( angular.mock.module( 'controllers' ) );
    
    let $scope;
    before( angular.mock.inject( function( $controller ) {
        $controller( 'counter', { $scope: {} } );
    }));

    it( 'default count is 1', () => {
        assert.equal( $scope.count, 1 );  
    });

    it( 'adds and substracts', () => {
        $scope.add();
        assert.equal( $scope.count, 2 );
        $scope.subtract();
        assert.equal( $scope.count, 1 );  
    });

    it( 'halves', () => {
        assert.equal( $scope.half(4), 2 );
    });
});