/* globals angular, chai */

const { assert } = chai;

describe( 'directives', () => {

    beforeEach( angular.mock.module( 'directives' ) );
    
    let $compile;
	beforeEach(angular.mock.inject( _$compile_ => {
		$compile = _$compile_;
	}));

    it( '...', () => {
        
    });
});