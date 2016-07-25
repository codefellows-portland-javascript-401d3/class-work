const Customer = require( './models/customer' );
const Orders = require( './models/orders' );

function getOrders( customerId ) {

		return Customer.findById( customerId )
			.then( customer => Orders.findAll( { key: customer.key } ) );

}

function somewhereelse() {
	getOrders( req.params.customerId )
		.then( orders => res.send( orders ) )
		.catch( next );
}