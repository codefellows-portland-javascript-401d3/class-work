import template from './movies.html';

export default {
    template,
    controller
};

controller.$inject = [ 'movieService' ];

function controller( movieService ) {
    console.log( 'moviesvc count', movieService.getCount() );
    movieService.getAll()
        .then( movies => this.movies = movies )
        .catch( err => console.log( err ) );

    this.add = movieToAdd => {
        movieService.add( movieToAdd )
            .then( addedMovie => {
                this.movies.push( addedMovie );
            })
            .catch( err => {
                // deal with error appropriately like display
                // message to user.
                // For now, just log so we don't get silient failure
                console.log( err );
            });
    };

    this.remove = movieToRemove => {
        movieService.remove( movieToRemove )
            .then( deleted => {
                const index = this.movies.findIndex( m => m._id === deleted._id );
                if ( index > -1 ) this.movies.splice( index, 1 );

            });
    };
}