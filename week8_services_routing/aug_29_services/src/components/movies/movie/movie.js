import template from './movie.html';
import angular from 'angular';

export default {
    template,
    bindings: {
        movie: '<',
        remove: '&'
    },
    controller
};

controller.$inject = [ '$mdDialog' ];

function controller( $mdDialog ) {
    
    this.removeMovie = () => {
        this.remove({ movie: this.movie });
    };

    this.edit = ($event) => {
        var parentEl = angular.element(document.body);
        $mdDialog.show({
            parent: parentEl,
            targetEvent: $event,
            controllerAs: '$ctrl',
            bindToController: true,
            template: '<edit-movie-dialog movie="$ctrl.movie"></edit-movie-dialog>',
            controller() {},
            locals: {
                movie: this.movie
            },
            clickOutsideToClose: true,
            escapeToClose: true
        })
        .then( updatedMovie => {
            // user cancelled
            if( !updatedMovie ) return;

            // otherwise, copy to existing object:
            angular.copy( updatedMovie, this.movie );
        });

    };
}