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

app.get('/api/monkeys', function(req, res){
    res.send([
        { name: 'peanutbuttercup', type: 1 },
        { name: 'chocolate', type: 1 },
        { name: 'bob', type: 1 },
        { name: 'rafiki', type: 2 },
        { name: 'joey', type: 2 },
        { name: 'king julius', type: 3 },
        { name: 'owly', type: 3 },
        { name: 'pat', type: 2 },
        { name: 'tiny', type: 4 },
        { name: 'tinier', type: 4 },
        { name: 'tiniest', type: 4 }
    ]);
});

app.get('/api/monkeys/types', function(req, res){
    res.send([
        { id: 1, name: 'rhesus' },
        { id: 2, name: 'baboon' },
        { id: 3, name: 'lemur' },
        { id: 4, name: 'marmot' }
    ]);
});

app.listen( 3000 );