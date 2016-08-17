import angular from 'angular';
import template from './app.html';
import controllers from './controllers';

const app = angular.module( 'myApp', [ controllers ] );

document.body.innerHTML = template;
angular.bootstrap( document, [ app.name ] );

