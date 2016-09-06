/* globals angular, chai */

const assert = chai.assert;
const { mock } = angular;

describe( 'directive', () => {

	let $httpBackend = null, itemService = null;

	beforeEach( mock.module( 'services', { apiUrl: '/api' } ) );

	class Services {
		constructor() {
			this.svc = Object.create( null );
		}
		hook( ...names ) {
			return () => {
				Object.keys( this.svc ).forEach( k => delete this.svc[k] );
				names[ names.length ] = ( ...services ) => {
					services.forEach( ( svc, i ) => {
						this.svc[ names[i] ] = svc;
					});
				};
				mock.inject.call( mock, names );
			};
		}
	}

	const inject = new Services();
	const svc = inject.svc;

	beforeEach( inject.hook( 'itemService', '$httpBackend' ) );

	afterEach( () => {
		svc.$httpBackend.verifyNoOutstandingExpectation();
		svc.$httpBackend.verifyNoOutstandingRequest();
	});

	it( 'gets items', done => {
		const listId = 123;
		const items = [ 1, 2, 3];
		svc.$httpBackend
			.expectGET( `/api/todos/${listId}/items` )
			.respond( items );

		svc.itemService.get( listId )
			.then( returnedItems => {
				assert.deepEqual( returnedItems, items );
				done();
			})
			.catch( done );

		svc.$httpBackend.flush();
	});

	it( 'adds item', done => {
		const listId = 123;
		const newItem = { task: 'addme', done: false };
		const returnItem = { isReturnItem: true };

		svc.$httpBackend
			.expectPOST( `/api/todos/${listId}/items`, newItem )
			.respond( returnItem );

		svc.itemService.add( listId, newItem )
			.then( item => {
				assert.deepEqual( item, returnItem, 'return item not same' );
				done();
			})
			.catch( done );


		svc.$httpBackend.flush();
	});

});