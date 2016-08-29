import template from './edit-movie-dialog.html';
import angular from 'angular';

export default {
    template,
    transclude: true,
    bindings: {
        movieToEdit: '<movie',
    },
    controller
};

controller.$inject = [ '$mdDialog', 'movieService' ];
function controller( $mdDialog, movieService ) {
    console.log( 'moviesvc count', movieService.getCount() );
    
    this.movie = angular.copy( this.movieToEdit );

    this.cancel = () => {
        $mdDialog.hide();
    };

    this.save = () => {
        movieService.update( this.movie )
            .then( updatedMovie => {
                $mdDialog.hide( updatedMovie );
            });
    };
}