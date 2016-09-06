
/* Factory example */
listService.$inject = [ '$http', 'apiUrl', '$cacheFactory' ];

export default function listService( $http, apiUrl, $cacheFactory ) {
	const cache = $cacheFactory.get( '$http');

	return {
		getAll() {
			return $http
				.get( `${apiUrl}/todos`, { cache: true })
				.then( r => r.data );
		},
		get( id ) {
			return $http
				.get( `${apiUrl}/todos/${id}`, { cache: true })
				.then( r => r.data );
		},
		update( list ) {
			cache.remove( `${apiUrl}/todos/${list.id}` );

			const update = { name: list.name };
			return $http
				.put( `${apiUrl}/todos/${list.id}`, update )
				.then( r => r.data );
		},
		add( list ) {
			cache.remove( `${apiUrl}/todos` );

			return $http
				.post( `${apiUrl}/todos`, list )
				.then( r => r.data );
		},
		remove( listId ) {
			cache.remove( `${apiUrl}/todos` );
			
			return $http
				.delete( `${apiUrl}/todos/${listId}` )
				.then( r => r.data );
		}
	};
}
