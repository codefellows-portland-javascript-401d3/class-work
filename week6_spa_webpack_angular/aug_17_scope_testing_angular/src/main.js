import angular from 'angular';
import app from './app';
import template from './app.html';

document.body.innerHTML = template;
angular.bootstrap( document, [ app ] );

