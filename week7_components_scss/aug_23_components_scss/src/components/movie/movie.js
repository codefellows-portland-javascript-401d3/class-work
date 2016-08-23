import template from './movie.html';

export default {
    template,
    bindings: {
        movie: '<',
        remove: '&'
    },
    controller: function() {
        
        this.removeMovie = () => {
            this.remove({ movie: this.movie });
        };
    }
};
