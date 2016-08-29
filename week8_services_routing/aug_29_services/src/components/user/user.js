import template from './user.html';
import styles from './user.scss';

export default {
    template,
    controller() {
        this.styles = styles;

        this.user = {
            name: 'bilbo baggins'
        };
    }
};