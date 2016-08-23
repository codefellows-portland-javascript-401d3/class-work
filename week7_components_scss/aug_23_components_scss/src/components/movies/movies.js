import template from './movies.html';

export default {
    template,
    controller: function() {
        this.movies = [
            { title: 'star wars', genre: 'sci fi' },
            { title: 'tomb raider', genre: 'action' },
            { title: 'ghostbusters', genre: 'comedy' },
            { title: 'marley and me', genre: 'sad dog story' },
            { title: 'real genius', genre: 'comedy' }
        ];

        this.add = movieToAdd => {
            this.movies.push(movieToAdd);
        };

        this.remove = movieToRemove => {
            console.log( 'removeFromList', movieToRemove );
            const index = this.movies.indexOf( movieToRemove );
            if ( index > -1 ) this.movies.splice( index, 1 );
        };
    }
};