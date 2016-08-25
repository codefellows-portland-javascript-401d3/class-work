import angular from 'angular';
import template from './edit-movie.html';

export default function getDialog( $event, movie ) {
    return {
        parent: angular.element(document.body),
        targetEvent: $event,
        template,
        controllerAs: 'dialog',
        bindToController: true,
        controller() {},
        locals: { movie },
        clickOutsideToClose: true,
        escapeToClose: true
    };
}