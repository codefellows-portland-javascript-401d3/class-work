const http = require( 'http' );
const url = require( 'url' );

http.createServer( ( req, res ) => {
  const reqUrl = url.parse( req.url, true );
  res.write( `your query was ${Object.keys(reqUrl.query).map( k => `<li>${k}: ${reqUrl.query[k]}</li>`)}` );
  res.end();
}).listen( 8000 );