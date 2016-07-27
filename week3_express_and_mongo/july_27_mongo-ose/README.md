![cf](http://i.imgur.com/7v5ASc8.png)  Intro to ExpressJS
===

## 1-on-1
* Sign-up for part 2
	
## Today's Learning Objectives

* Install and run a local mongodb instance.
* Code models that correspond to logic business entities (aka resource) 
using mongoose running with NodeJS
* Code an express Router that expose CRUD operations against the mongoose 
models as a set of callable REST API endpoints.

## Agenda

* Mongo
	* mongod
	* mongo shell
	* Mongoose
* Schema vs Schemaless
* Mongoose Schemas
	* Defining “Properties”
		* Types and property options
	* Schema Options
		* timestamp
		* required
		* validation...
	* Testing models
* Consuming models in routes
	* Static model methods (`Model.findOne()`)
	* instance models (`model.save()`)
* Testing mongodb
	* Running test server for use in e2e testing
	* Preparing resources for testing
