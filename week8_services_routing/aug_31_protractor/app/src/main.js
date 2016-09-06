import angular from 'angular';
import app from './todo-app';
import routes from './routes';
import './scss/main.scss';

app.config( routes );

// if we wanted to turn on caching across the board...
// (only applies to gets)
// app.config( [ '$httpProvider', function( $httpProvider ) {
//     $httpProvider.defaults.config = true;
// }]);

app.value( 'apiUrl', process.env.API_URL );

angular.bootstrap( document, [ app.name ] );

