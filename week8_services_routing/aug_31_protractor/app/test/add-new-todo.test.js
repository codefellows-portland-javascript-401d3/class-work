/* globals angular, chai */

const assert = chai.assert;

describe( 'directive', () => {

	angular.mock.module.sharedInjector();
	before(angular.mock.module( 'components' ) );

	let $component;
	before(angular.mock.inject( ( $rootScope, _$componentController_ ) => {
		$component = ( name, bindings ) => _$componentController_( name, null, bindings );
	}));

	it( 'submit calls add with correct task', () => {
		let addedTask = '';
		const add = ({ task }) => addedTask = task;
		const addNew = $component( 'addNewTodo', { add } );

		addNew.item = 'FOO';
		addNew.submit();
		assert.equal( addedTask, 'FOO' );
		assert.equal( addNew.item, '' );
	});

	it( 'doesn\'t call add when no item', () => {
		const add = () => assert.fail();
		const addNew = $component( 'addNewTodo', { add } );
		addNew.item = '';
		addNew.submit();
	});

});