import angular from 'angular';
import components from './components';
import md from 'angular-material';
import messages from 'angular-messages';

const app = angular.module( 'myApp', [ 
    components, md, messages
]);

app.config( [ '$mdThemingProvider', function( $mdThemingProvider ){
    $mdThemingProvider.theme('docs-dark').dark();
}]);

export default app.name;


