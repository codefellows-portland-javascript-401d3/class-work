import angular from 'angular';
import router from 'angular-ui-router';
import components from './components';
import services from './services';
import ngDialog from 'ng-dialog';
import 'ng-dialog/css/ngDialog.css';
import 'ng-dialog/css/ngDialog-theme-default.css';
// need this for old $stateChanged events;
import 'angular-ui-router/release/stateEvents';

const app = angular.module( 'todoApp', [ 
	router, 
	angular.module( 'ui.router.state.events' ).name,
	ngDialog,
	components,
	services
]);

export default app;

