const notes = [];

module.exports = {
	getAll( cb ) {
		setImmediate( () => {
			cb( null, notes );
		})
	}
};

module.exports = {
	getAll() {
		return new Promise( ( resolve, reject ) => {
			resolve( notes );
		});
	}
};