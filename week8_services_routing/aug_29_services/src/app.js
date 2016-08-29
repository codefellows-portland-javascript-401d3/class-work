import angular from 'angular';
import components from './components';
import services from './services';
import md from 'angular-material';
import messages from 'angular-messages';

const app = angular.module( 'myApp', [ 
    components, services, md, messages
]);

export default app.name;


