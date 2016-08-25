import template from './app.html';

export default {
    template,
    controller() {
        this.showName = () => {
            alert( 'parent!' );
        };
    }
};
