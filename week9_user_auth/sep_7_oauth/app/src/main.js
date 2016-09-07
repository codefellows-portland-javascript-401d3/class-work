import angular from 'angular';
import app from './todo-app';
import auth from './auth';
import routes from './routes';
import oauth from './oauth';
import http from './http';
import './scss/main.scss';

app.constant( 'apiUrl', process.env.API_URL );

app.config( http );
app.config( routes );
app.config( oauth );

app.run( auth );

// if we wanted to turn on caching across the board...
// (only applies to gets)
// app.config( [ '$httpProvider', function( $httpProvider ) {
//     $httpProvider.defaults.config = true;
// }]);


angular.bootstrap( document, [ app.name ] );

