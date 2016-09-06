import template from './lists.html';

export default {
    template,
    bindings: {
        display: '<'
    },
    controller
};

controller.$inject = [ 'listService' ];

function controller( listService ) {
    listService.getAll()
        .then( lists => this.lists = lists )
        .catch( err => console.log( err ) );

    this.add = name => {
        listService.add( { name } )
            .then( item => this.lists.push( item ) )
            .catch( err => console.log( err ) );
    };
}
