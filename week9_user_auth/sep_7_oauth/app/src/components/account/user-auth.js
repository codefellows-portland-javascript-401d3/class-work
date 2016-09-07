

export default {
	template: `
	<div>
		<label>
			<input type="radio" ng-model="$ctrl.action" value="signin">
			Sign In
		</label>
		<label>
			<input type="radio" ng-model="$ctrl.action" value="signup">
			Sign Up
		</label>
		<button ng-click="$ctrl.authenticate('twitter')">Sign in with Twitter</button>
	</div>

	<signin ng-if="$ctrl.action==='signin'" success="$ctrl.success()"></signin>
	<signup ng-if="$ctrl.action==='signup'" success="$ctrl.success()"></signup>
	`,
	bindings: { success: '&' },
	controller
};

controller.$inject = [ '$auth', 'tokenService' ];

function controller( $auth, token ) {
	this.action = 'signin';

	this.authenticate = provider => {
		$auth.authenticate( provider )
			.then( response => {
				token.set( response.data.token );
				this.success();
			})
			.catch( err => {
				this.error = err;
				console.log( err );
			});
	};
}
