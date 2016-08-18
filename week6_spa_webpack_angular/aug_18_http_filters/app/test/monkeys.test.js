/* globals angular, chai */

const { assert } = chai;

describe( 'monkeys controller', () => {

    beforeEach( angular.mock.module( 'controllers' ) );
    
    let $controller, $scope;
    beforeEach( angular.mock.inject( function( $rootScope, _$controller_ ) {
        $scope = $rootScope.$new();
        $controller = _$controller_;
    }));

    it( 'get monkeys', () => {
        
    });
});