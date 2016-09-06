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
            url: '/account',	
            views: {
                main: {
                    component: 'account'
                }
            }
        })
        .state( 'lists', {
            url: '/todos?display',
            params: { display: { dynamic: true } },
            resolve: {
                display: [ '$stateParams', p => p.display || 'list' ]
            },
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
                todoListId: [ '$stateParams', p => p.listId ],
                display: [ '$stateParams', p => p.display || 'list' ]
            },
            views: {
                header: {
                    component: 'displayHeader'
                },
                main: {
                    component: 'todoList'
                }
            }
        });

    $urlRouterProvider.otherwise( '/' );
}