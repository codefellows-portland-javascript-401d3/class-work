import template from './movies.html';

export default {
    template,
    controller
};

controller.$inject = [ '$http' ];

function controller( $http ) {
    $http.get( 'http://localhost:3000/api/movies' )
        .then( response => response.data )
        .then( movies => this.movies = movies )
        .catch( err => console.log( err ) );

    this.add = movieToAdd => {
        this.movies.push(movieToAdd);
    };

    this.remove = movieToRemove => {
        const index = this.movies.indexOf( movieToRemove );
        if ( index > -1 ) this.movies.splice( index, 1 );
    };
}