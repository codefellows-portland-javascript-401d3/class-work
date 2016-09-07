auth.$inject = [ '$rootScope', 'userService', 'ngDialog', '$state' ];

export default function auth( $rootScope, userService, ngDialog, $state ) {
	
    // angular-ui-router puts this event on $rootScope
	$rootScope.$on('$stateChangeStart', ( event, toState, toParams  ) => {
	
		//console.log( '$scs', toState, toParams, fromState, fromParams );

        if ( toState.data && toState.data.requiresAuth && !userService.isAuthenticated() ) {
            // stop ui-router from making the state change        
            event.preventDefault();

            // throw up a dialog and ask user to signin/signup
            const dialog = ngDialog.open({ 
				template: '<user-auth success="success()"></user-auth>', 
				plain: true,
				controller: [ '$scope', function( $scope ){
					$scope.success = function(){
						dialog.close();
						return $state.go( toState.name, toParams );
					};
				}]
			});
			
			dialog.closePromise
                .catch( err => alert( 'failure!\n\n' + err ) );
        }

    });
}