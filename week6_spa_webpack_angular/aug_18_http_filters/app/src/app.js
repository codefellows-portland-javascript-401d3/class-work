import angular from 'angular';
import controllers from './controllers';
import filters from './filters';

const app = angular.module( 'myApp', [ 
    controllers,
    filters 
]);

export default app.name;


