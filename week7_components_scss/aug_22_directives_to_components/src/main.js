import angular from 'angular';
import app from './app';
import template from './app.html';
import './main.css';

angular.module( app ).run([ '$rootScope', function($rootScope) {
    $rootScope.movies = [
        { title: 'star wars', genre: 'sci fi' },
        { title: 'tomb raider', genre: 'action' },
        { title: 'ghostbusters', genre: 'comedy' },
        { title: 'marley and me', genre: 'sad dog story' },
        { title: 'real genius', genre: 'comedy' }
    ];
}]);

document.body.innerHTML = template;
angular.bootstrap( document, [ app ] );

