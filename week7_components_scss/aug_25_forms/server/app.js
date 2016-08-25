const express = require( 'express' );
const app = express();
const morgan = require( 'morgan' );

app.use( morgan( 'dev' ) );

app.use( express.static( __dirname + '/public' ) );

app.use( ( req, res, next ) => {
    const url = '*';
    res.header( 'Access-Control-Allow-Origin', url );
    res.header( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE' );
    res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
    next();
});

app.get('/api/movies', function(req, res){
    setTimeout( () => {
        res.send([
            { title: 'star wars', genre: 'sci fi' },
            { title: 'tomb raider', genre: 'action' },
            { title: 'ghostbusters', genre: 'comedy' },
            { title: 'marley and me', genre: 'sad dog story' },
            { title: 'real genius', genre: 'comedy' }
        ]);
    }, 1500);
});

app.listen( 3000 );