import template from './pane.html';
import styles from './pane.scss';

export default {
    template,
    transclude: {
        header: '?paneHeader',
        content: 'paneContent'
    },
    controller() {
        this.styles = styles;

    }
};
