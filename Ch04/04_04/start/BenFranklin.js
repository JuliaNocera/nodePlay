// How to load your own custom modules

var Person = require('./lib/person'); // we have to require with the path when using a custom module

var ben = new Person("Ben Franklin");
var george = new Person("George");

george.on('speak', function(said) {
	console.log(`${this.name} -> ${said}`);
});

ben.on('speak', function(said) {

	console.log(`${this.name}: ${said}`);

});


ben.emit('speak', "You may delay, but time will not.");
george.emit('speak', "It is far better to be alone then in bad company");
