# Node Clients

## Lab Observations

* Working on a team?
	* __Don't__ create multiple github PR's (team members use
	same github PR url).
	* __Do__ make individual canvas submissions
* Use assertion libraries
* Make sure library API is conscious, apart from test

## Today's Learning Objectives

1. Create TCP and HTTP clients using Node.js
2. Differentiate HTTP requests based on path (url) and verb (http) and other request factors
3. E2E servers using Mocha (and chai-http for HTTP)

## Labs

Part 2 on both labs:

* [TCP Chat Server](https://github.com/codefellows-portland-javascript-401d3/tcp-chat-server)
* [HTTP Hello/Goodbye World](https://github.com/codefellows-portland-javascript-401d3/http-hello-goodbye-world)

### Node Clients

* TCP
* HTTP (node build-in module)
* Request Libraries (request, superagent, etc)
* Superagent used by chai-http

### HTTP

* [ Http Protocol explained ](http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)
* Url
	* http://bl.ocks.org/abernier/3070589
	* protocol
	* hostname ( host + port )
	* resource path
	* query
* Verbs: 
	* GET, POST, PUT, DELETE, PATCH
	* plus more ...
* REST
	* https://spring.io/understanding/REST
	* Resources (nouns!)
	* Part “art”
* Headers
	* Status codes
	* Entity Description
		* Content type, etc.
	* Authorization tokens

### E2E Testing Servers

* setup and teardown
	* before/after
	* beforeEach/AfterEach
* Chai HTTP (SuperAgent)