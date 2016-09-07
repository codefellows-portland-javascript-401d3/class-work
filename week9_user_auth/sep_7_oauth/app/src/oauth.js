oauth.$inject = [ '$authProvider', 'apiUrl' ];

export default function oauth( $authProvider, apiUrl ) {
	const url = `${apiUrl}/twitter`;
	$authProvider.twitter({ url });
}