import angular from 'angular';
import app from './app';
import './scss/main.scss';

angular.module( app )
.run([ '$rootScope', function($rootScope) {
    $rootScope.movies = [
        { title: 'star wars', genre: 'sci fi' },
        { title: 'tomb raider', genre: 'action' },
        { title: 'ghostbusters', genre: 'comedy' },
        { title: 'marley and me', genre: 'sad dog story' },
        { title: 'real genius', genre: 'comedy' }
    ];
}]);

angular.bootstrap( document, [ app ] );

