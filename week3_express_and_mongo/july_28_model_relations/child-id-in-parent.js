require( './lib/setup-mongoose' );
const Crew = require( './lib/models/crew' );
const Pirate = require( './lib/models/pirate' );

/* keys in arrays in doc (child in parent) good
for many-to-many types of relationships
or, situations where id things are fairly fixed
and relationship doesn't have it's own data */

/* create a crew with a pirate */
// const strawHats = new Crew({ name: 'Straw Hats' });
// const luffy = new Pirate({
// 	name: 'Monkey D Luffy',
// 	rank: 'captain'
// });

// luffy.save()
// 	.then( pirate => {
// 		strawHats.pirates.push( pirate.id );
// 		return strawHats.save();
// 	})
// 	.then( crew => console.log( crew ) )
// 	.catch( err => console.log( err ) );

/* add another pirate by id */
// Crew.findOne({ name: 'Straw Hats' })
// 	.then( crew => {
// 		crew.pirates.push( '579a34a05fc0fdacdc4c07f3' );
// 		return crew.save();
// 	})
// 	.then( crew => console.log( 'added pirate' ) )
// 	.catch( err => console.log( err ) );


/* retrieve a crew with pirates */
Crew.findOne({ name: 'Straw Hats' })
	// what properties do you want?
	// .select( 'name' )
	//simple populate with path name:
	// .populate( 'pirates' )
	// more complext populate with child select and match
	.populate({
		path: 'pirates',
		select: 'name',
		match: { rank: 'captain' }
	})
	.lean()
	.then( crew => {
		console.log( crew );
	})
	.catch( err => console.log( err ) );

/* retrieve crew list with pirate count */
// Crew.findOne({ name: 'Straw Hats' })
// 	.select( 'name pirates' )
// 	.lean()
// 	.then( c => ({ name: c.name, pirates: c.pirates.length }) )
// 	.then( crew => console.log( crew ) )
// 	.catch( err => console.log( err ) );
