const path = require( 'path' );
const resolve = path.resolve;
const join = path.join;
const fs = require( 'fs' );
const mkdirp = require( 'mkdirp' );

module.exports = function storeFactory( basePath, callback ){
	basePath = resolve( basePath );
	mkdirp( basePath, err => {
		if ( err ) return callback( err );
		callback( null, new Store( basePath ) );
	});
}

class Store {
	constructor( basePath ) {
		this.basePath = basePath;
	}

	save( obj, callback ) {
		obj.id = 10;
		fs.writeFile( getPath( this, obj.id ), JSON.stringify( obj ), err => {
			if ( err ) return callback( err );
			callback( null, obj );
		})
	}

	get( id, callback ) {
		fs.readFile( getPath( this, id ), ( err, data ) => {
			if ( err ) return callback( err );
			callback( null, JSON.parse( data ) );
		});
	}
}

function getPath( store, id ) {
	return path.join( store.basePath, id.toString() );
}