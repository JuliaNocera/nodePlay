// exec is an execute function on the child process module that takes an action in terminal
//ex. open a file or a webpage

var exec = require('child_process').exec;

// ex: exec("open http://www.google.com");

exec("sublime .") // opens the current dir in sublime

exec("git version", function(err, stdout) {
	if(err){
		throw err; // app crashes on process exits
	}

	console.log("git version");
	console.log(stdout);
});

exec("ls", function(err, stdout) {
	if(err){
		throw err; // app crashes on process exits
	}

	console.log("git version");
	console.log(stdout);
})