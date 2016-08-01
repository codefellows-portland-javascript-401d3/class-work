![cf](http://i.imgur.com/7v5ASc8.png)  User Management and Authentication
===

## Feedback and Announcements
* Jonan Scheffler at 1:30pm
* 

## Agenda

* Manage Users
	* Sign Up
	* Sign In
* Issue Tokens
	* Keep Users "signed in" - even across new browser
	* Stateless
	* Keep Info (like "roles" or "user name") in Payload
* Create middleware to protect routes
	* Must be "authenticated", ie have a token
	* Check user roles to provide "authorization" checks
