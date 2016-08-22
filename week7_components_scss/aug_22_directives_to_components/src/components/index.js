import angular from 'angular';
import helloWorld from './hello-world/hello-world.js';
import movies from './movies/movies.js';
import movie from './movie/movie.js';
import addNewMovie from './add-new-movie/add-new-movie.js';

const module = angular.module( 'components', [] );

module.directive( 'helloWorld', helloWorld );
module.directive( 'movies', movies );
module.directive( 'movie', movie );
module.directive( 'addNewMovie', addNewMovie );

export default module.name;