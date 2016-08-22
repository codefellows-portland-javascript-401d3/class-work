import template from './hello-world.html';

export default function list() {
    return {
        restrict: 'E',
        template,
        // names are property on scope, 
        // value is how to bind, and (optionally) what attribute
        // if attribute same as property name, you can omit
        scope: {
            // @ bindings take the "literal" value of the attribute
            // (use attr="{{foo}}" if you need to pull value from model)
            greeting: '@',
            // = bindings offer two-way binding between parent and 
            // child for model provided
            name: '=',
            // < bindings offer parent to child updates
            secondName: '<'
        },
        controller() {

        }
    };
}