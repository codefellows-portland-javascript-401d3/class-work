require( './lib/setup-mongoose' );
const Crew = require( './lib/models/crew' );
const Pirate = require( './lib/models/pirate' );

const pirates = [
    { name: 'luffy', rank: 'captain' },
    { name: 'zoro', rank: 'swordsman' },
    { name: 'nami', rank: 'navigator' },
    { name: 'usopp', rank: 'sniper' },
    { name: 'sanji', rank: 'cook' },
    { name: 'chopper', rank: 'doctor' },
    { name: 'franky', rank: 'shipwright' },
    { name: 'brook', rank: 'musician' }
]

new Crew({ name: 'Straw Hats' }).save()
    .then( crew => crew._id )
    .then( crewId => {
        return pirates.map( p => {
            p.crewId = crewId;
            return new Pirate(p).save();
        })
    })
    .then( promises => Promise.all( promises ) )
    .then( pirates => console.log( pirates ) )
    .catch( err => console.log( err ) )