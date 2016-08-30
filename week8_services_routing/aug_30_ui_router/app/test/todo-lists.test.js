/* globals angular, chai */

const assert = chai.assert;
const { mock } = angular;

describe( 'directive', () => {

	const itemSvc = {};
	const listId = 123;

	mock.module.sharedInjector();
	before(
		mock.module( 'components', { itemService: itemSvc })
	);

	let $component;
	before(mock.inject( _$componentController_ => {
		$component = ( name, bindings ) => _$componentController_( name, null, bindings );
	}));

	let todosComponent;

	it( 'initializes with correct data', done => {
		const todos = [];

		itemSvc.get = ( id ) => {
			assert.equal( id, listId );
			return Promise.resolve( todos );
		};

		todosComponent = $component( 'todos', { listId } );

		setTimeout( () => {
			assert.equal( todosComponent.todos, todos );
			done();
		});
	});

	it( 'add an item', done => {
		const task = 'thing to do';
		let returnTodo = null;

		itemSvc.add = ( id, todoToAdd ) => {
			assert.equal( id, listId );
			assert.equal( todoToAdd.task, task );
			assert.isFalse( todoToAdd.done );

			returnTodo = {
				id: 10,
				task: todoToAdd.task,
				done: todoToAdd.done
			};
			return Promise.resolve( returnTodo );
		};

		todosComponent.add( task );

		setTimeout( () => {
			assert.equal( todosComponent.todos.length, 1 );
			assert.equal( todosComponent.todos[0], returnTodo );
			done();
		}, 100);
	});

	it( 'update an item', done => {

		const todo = todosComponent.todos[0];
		todo.task = 'Some new task name';
		
		let returnTodo = null;
		itemSvc.update = ( id, todoToUpdate ) => {
			assert.equal( id, listId );
			assert.equal( todoToUpdate, todo );

			returnTodo = {
				id: todoToUpdate,
				task: todoToUpdate.task,
				done: todoToUpdate.done
			};
			return Promise.resolve( returnTodo );
		};

		todosComponent.update( todo );

		setTimeout( () => {
			assert.equal( todosComponent.todos.length, 1 );
			assert.notEqual( todosComponent.todos[0], todo );
			assert.equal( todosComponent.todos[0], returnTodo );
			done();
		}, 100);
	});

	it( 'remove an item', done => {

		const todo = todosComponent.todos[0];
		
		itemSvc.remove = ( id, todoId ) => {
			assert.equal( id, listId );
			assert.equal( todoId, todo.id );

			return Promise.resolve({ id: todoId });
		};

		todosComponent.remove( todo.id );

		setTimeout( () => {
			assert.equal( todosComponent.todos.length, 0 );
			done();
		}, 100);
	});


});