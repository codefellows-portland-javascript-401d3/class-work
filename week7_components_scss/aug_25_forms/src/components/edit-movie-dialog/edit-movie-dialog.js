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

controller.$inject = [ '$mdDialog', '$timeout' ];
function controller( $mdDialog, $timeout ) {
    this.movie = angular.copy( this.movieToEdit );

    this.cancel = () => {
        $mdDialog.hide();
    };

    this.save = () => {
        // simulate service save that might look like:
        // movieService.update( this.movie )
        //     .then( updatedMovie => {
        //         $mdDialog.hide( updatedMovie );

        //     });

        $timeout( () => {
            const updatedMovie = angular.copy( this.movie );
            $mdDialog.hide( updatedMovie );
        });
    };
}