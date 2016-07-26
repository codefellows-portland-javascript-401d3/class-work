![cf](http://i.imgur.com/7v5ASc8.png)  Intro to ExpressJS
===

## 1-on-1
* Sign-up Tuesday afternoon
	
## Today's Learning Objectives

* Modularize resource routes using `express.Router()`
* Create middleware chains using `app.use` and `app.METHOD`
* Create custom middleware using express middleware functions 
* Consume third-party middleware via npm modules like `morgan`
* Correctly handle middleware errors and 404 errors by setting up 
express error handling middleware functions 

## Agenda

* Middleware
	* What is it?
		* Loaded term with long history
		* In Express, in the “middle” between request and response
	* Middleware “Functions”
	* Mounting middleware
	* Design best practices
		* Use toward top of file
		* Leaving the res object until the end
	* Parameters
	* Route handling
		* Regex and efficiency
		* Router object
	* Middleware error handling
* `express.Router`
	* Extract routes from main app.js
	* Leverage mounting path in app.use
	* Routers are nestable
* Project Structure
	Modularize routes
		* don't use one huge app.js file!
		* express.Router()
	Folder/File
		* views, routes, models, public
		* server, app, config
	food for thought: look at express generator
