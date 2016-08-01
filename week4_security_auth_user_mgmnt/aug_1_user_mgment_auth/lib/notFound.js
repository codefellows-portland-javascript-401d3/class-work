module.exports = function getNotFound() {
	return ( req, res, next ) => {
		next({
			code: 404,
			error: `"${req.method} ${req.url} does not exist`
		});
	};
}