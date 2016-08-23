import template from './add-new-movie.html';

export default {
    template,
    bindings: {
        add: '&'
    },
    controller: function() {

        const resetMovie = () => {
            this.movie = {};
        };

        resetMovie();

        this.submit = () => {
            this.add({ movie: this.movie });
            resetMovie();
        };
    }
};