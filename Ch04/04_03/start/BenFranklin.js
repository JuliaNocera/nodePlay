// Event emitter -- nodeJs' implemntation of the pubsub (?)
// event module

var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name) {
 	this.name = name;
};

util.inherits(Person, EventEmitter);

var ben = new Person("Ben Frank");

ben.on('speak', function(said) {
	console.log(`${this.name}: ${said}`)						// this is ben (ben.on) this refers to obj on left of '.'
});

ben.emit('speak', "You may delay but time will not.");



/*

var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('customEvent', function(message, status) {
	console.log(`${status}: ${message}`);
})

emitter.emit("customEvent", "Hello World", 200) // event, args for the event function


*/