require( './lib/setup-mongoose' );
const Crew = require( './lib/models/crew' );
const Pirate = require( './lib/models/pirate' );

/* putting parent id in child is most common
situation. easy to add and remove children.
good to separate getting parent from getting child
*/

/* create a crew with a pirate */
// const strawHats = new Crew({ name: 'Full Stack Pirates' });
// strawHats.save()
// 	.then( crew => {
// 		return Promise.all([
// 			new Pirate({
// 				name: 'Marty',
// 				rank: 'captain',
// 				crewId: crew._id
// 			}).save(),
// 			new Pirate({
// 				name: 'David',
// 				rank: 'first mate',
// 				crewId: crew._id
// 			}).save()
// 		]);
// 	})
// 	.then( pirates => console.log( pirates ) )
// 	.catch( err => console.log( err ) );

/* add another pirate to this crew, we just need the crew id */
// Crew.findOne({ name: 'Straw Hats' })
// 	// in this example, we only need the _id
// 	.select()
// 	.lean()
// 	.then( crew => {
// 		return new Pirate({
// 			name: 'Nami',
// 			rank: 'navigator',
// 			crewId: crew._id
// 		}).save();
// 	})
// 	.then( nami => console.log( nami ) )
// 	.catch( err => console.log( err ) );

/* retrieve all the pirate in a given crew */
// Crew.findOne({ name: 'Straw Hats' })
// 	.select( 'name' ).lean()
// 	.then( crew => {
// 		return Pirate.find({ crewId: crew._id })
// 	})
// 	.then( pirates => console.log( pirates ) )
// 	.catch( err => console.log( err ) );

/* include crew info with a pirate get */
// Pirate.findOne({ name: 'Monkey D Luffy' })
// 	.populate({
// 		path: 'crewId',
// 		select: 'name'
// 	})
// 	.lean()
// 	.then( luffy => console.log( luffy ) )
// 	.catch( err => console.log( err ) );
	

/* retrieve crew list with pirate count */
Pirate.aggregate()
	//.match({ _id: '579a4ec5d8fc0f49f8358901' })
	.group({ _id: '$crewId', count: { $sum: 1 } })
	.then( result => console.log( result ) )
	.catch( err => console.log( err ) );
