![cf](http://i.imgur.com/7v5ASc8.png) Buffers, File System (fs), and Asynchronicity

## Lab Observations
* add `npm-debug.log` to your `.gitignore`
* test names and tests suite names must be descriptive. Yes, naming is hard!
* `[UNRELEASED]` only needs to go in change branch, not master
* Use `const` consistently

## Learning Objectives

* Asynchronous programming using Node.js callback pattern
* Write asynchronous tests using the Mocha “done” parameter/argument
* Basic Filesystem I/O using fs built-in Node.js module
* Understand the difference between an in-memory object and its 
serialized representation and be able to move between the two formats by using:
	* JavaScript JSON to stringify and parse objects to strings
	* “encodings” with binary data to string format
* Read, write, and manipulate encoded binary data using the Buffer class

 

## Agenda

* [Three function passing patterns](https://github.com/martypdx/workshop-promises-fat-arrows/blob/master/async-js-patterns.md) 
* Review node event loop
* How do we
	* return values?
	* Propagate errors?
* Node callback pattern `callback( err, result )`
* Demo
	* Mocha `done`
		* test parameter
		* Tests function.length
		* if > 0, test is async
		* calling done with any non-null argument is failure (matches node callback signature)
	* and node `fs` module
	* Test drive "get files from directory"
* Orchestration?
	* Sequential
	* Parallel
		* Async order is "completion" based
* Binary Data
	* What is meaning?
	* Bits, Bytes, Words, DWords
	* Endianness
	* "encoding"
	* "serialization"
	* Meet `Buffer`
		* Data managed outside of JavaScript
		* Binary representation
		* Stored in Heap memory
		* Buffers access this memory
		* I/O methods
		* Beware of the number constructor
