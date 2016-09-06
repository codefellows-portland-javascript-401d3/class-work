import template from './todo-item.html';
import styles from './todo-item.scss';

export default {
    template,
    bindings: {
        todo: '=',
        update: '<',
        remove: '<'
    },
    controller: function(){
        this.styles = styles;
        
        this.updateName = name => {
            this.todo.task = name;
            this.update( this.todo );
        };
    }
};