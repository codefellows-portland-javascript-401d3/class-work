import template from './app.html';


export default {
	template,
	controllerAs: 'app',
	controller
};

controller.$inject = [ '$state' ];

function controller( $state ) {

	this.user = {
		username: 'martypdx'
	};

	this.listId = '5771b798b784ade02469451e';
	
	this.goTo = () => {
		$state.go( 'account' );
	};
}
