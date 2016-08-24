import template from './new-movie-form.html';

export default {
    template,
    bindings: {
        add: '<'
    },
    controller: function() {

        const resetMovie = () => {
            this.movie = {};
        };

        resetMovie();

        this.submit = () => {
            this.add(this.movie);
            resetMovie();
        };
    }
};