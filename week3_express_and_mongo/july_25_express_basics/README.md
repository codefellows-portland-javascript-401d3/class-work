![cf](http://i.imgur.com/7v5ASc8.png)  Intro to ExpressJS
===

## Feedback: Thank You!

* More examples/structure for assignments (?)
* Input on assignments/labs?
	* practice spinning up apps
	* need more complexity to really see advantages of middleware

## 1-on-1
* Sign-up Tuesday afternoon
	
## Roadmap

### Course
* First Week: JavaScript and Node Fundamentals
* Last Week: Server Fundamentals with Node
* **This Week: Middleware (Express.js) and Data (MongoDB)**
* Next Week: Authentication, Deployment, Goodies for Project Week

### This week
* [Week 3 Module](https://canvas.instructure.com/courses/1044232/modules)

## Today's Learning Objectives

* Setup app routing _with ExpressJS_ correctly using 
route matching, parameters, and order of routes
* “Starting” an express app, just _httpServer_, ie .listen() vs http.createServer(app)
* Serve static assets using `express.static`
* Server serve rendered pages using `jade` and `render.view`

## Overview

* routing
	* method based functions (`app.get`)
	* response.send
	* regex
	* order
	* parameters (route and query)
		* request
	* `app.use()`
* static files
* rendered views
* project structure
	* don't use one huge app.js file!
	* views, routes, static
	* express generator
	* `express.Router()` (tomorrow)