import template from './todo-list.html';
import styles from './todo-list.scss';

export default {
    template,
    bindings: {
        todoListId: '<',
        display: '<'
    },
    controller
};

controller.$inject = [ 'itemService', 'listService' ];

function controller( itemService, listService ) {
    this.styles = styles;

    listService.get( this.todoListId )
        .then( list => {
            this.todoList = list; 
            this.todos = this.todoList.items;
        });
    
    this.uiOnParamsChanged = params => {
        this.display = params.display;
    };


    this.updateName = name => {
        this.saving = true;
        this.todoList.name = name;
        listService
            .update( this.todoList )
            .then( endSave );
    };

    this.update = ( item ) => {
        this.saving = true;
        return itemService.update( this.todoList.id, item )	
            .then( updated => {
                const index = this.todos.findIndex( todo => todo === item );
                if ( index !== -1 ) this.todos.splice( index, 1, updated );
            })
            .catch( err => console.error( err ) )
            .then( endSave );
    };

    const endSave = () => this.saving = false;

    this.remove = ( id ) => {
        this.saving = true;
        return itemService.remove( this.todoList.id, id )
            .then( () => {
                const index = this.todos.findIndex( item => item.id === id );
                if ( index !== -1 ) this.todos.splice( index, 1 );
            })
            .catch( err => console.error( err ) )
            .then( endSave );
    };

    this.add = task => {
        this.saving = true;
        const todo = { task, done: false };
        return itemService.add( this.todoList.id, todo )
            .then( item => {
                this.todos.push( item ); 
            })
            .catch( err => console.log( err ) )
            .then( endSave );
    };
}