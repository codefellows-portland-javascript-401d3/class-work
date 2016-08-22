import angular from 'angular';
import directives from './directives';
import components from './components';

const app = angular.module( 'myApp', [ 
    directives,
    components 
]);

export default app.name;


