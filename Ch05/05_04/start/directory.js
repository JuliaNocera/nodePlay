// directory tools

var fs = require('fs');

if(fs.existsSync("lib")) {  // fs.exists checks if a file exists 
	console.log("dir already there");
} else {
	fs.mkdir("lib", function(err) {
		if(err) {
			console.log(err);
		} else {
			console.log("directory created");
		}
	});
};

