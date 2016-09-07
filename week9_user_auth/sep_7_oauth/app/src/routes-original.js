configRoutes.$inject = [ '$stateProvider', '$urlRouterProvider' ];

export default function configRoutes( $stateProvider, $urlRouterProvider ) {

	$stateProvider
		.state( 'home', {
			url: '/',
			views: {
				header: {
					component: 'homeHeader'
				},
				main: {
					template: '<p>welcome to our todo app</p>'
				}
			}
		})
		.state( 'account', {
			url: '/account?display',			
			resolve: {
				display: [ '$stateParams', p => p.display || 'list' ]
			},
			views: {
				// header: {
				// 	component: 'displayHeader'
				// },
				main: {
					component: 'account'
				}
			}
		})
		.state( 'lists', {
			url: '/todos',
			views: {
				main: {
					component: 'lists'
				}
			}
		})
		.state( 'list', {
			url: '/todos/:listId?display',
			params: { display: { dynamic: true } },
			resolve: {
				todoList: [ 'listService', '$stateParams', ( list, p ) => list.get( p.listId ) ],
				display: [ '$stateParams', p => p.display || 'list' ]
			},
			views: {
				// header: {
				// 	component: 'displayHeader'
				// },
				main: {
					component: 'todoList'
				}
			}
		});

	$urlRouterProvider.otherwise( '/' );
}