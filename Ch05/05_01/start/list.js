// fs Module

var fs = require('fs');

// the filesystem (fs) modules has asynch and synch commands for each command
//we can read synch or asynch (synch is for starting the app)
// this is synchronously ==> var files = fs.readdirSync('./lib');
// the below way is an asynchronous version
fs.readdir('./lib', function(err, files) {
	if(err){
		throw err;
	}

	console.log(files);

});


console.log("reading files...");