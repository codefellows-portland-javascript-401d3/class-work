require( './lib/setup-mongoose' );
const Crew = require( './lib/models/crew' );
const Pirate = require( './lib/models/pirate' );

// subdocument relations are good when children always 
// come along with the parent and are not generally needed 
// outside of parent document

/* create a crew with a pirate */
// const strawHats = new Crew({ name: 'Straw Hats' });
// const luffy = {
// 	name: 'Monkey D Luffy',
// 	rank: 'captain'
// };
// strawHats.pirates.push( luffy );
// strawHats.save()
// 	.then( crew => console.log( crew ) )
// 	.catch( err => console.log( err ) );


/* add a pirate to the crew */
Crew.findOne({ name: 'Straw Hats' })
	.then( strawHats => {
		// we can either use: new Pirate(data)
		// or just pass data and let mongoose make Pirate
		strawHats.pirates.push({
			name: 'Zoro',
			rank: 'swordsman'
		});

		strawHats.save()
			.then( crew => console.log( crew ) )
			.catch( err => console.log( err ) );

	})
	.catch( err => console.log( err ) );