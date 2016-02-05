var fs = require("fs");
var path = require("path");

fs.readdir('./lib', function(err, files) {

	files.forEach(function(fileName) { 
		var file = path.join(__dirname, "lib", fileName);
		var stats = fs.statSync(file);

		if(stats.isFile() && fileName !== ".DS_Store") {

			fs.readFile(file, "UTF-8", function(err, contents) {
				console.log(contents);
			});
			
		}

	});

});

/*
// first arg = file to read & the 2nd = text encoding
// if we do not put an encoding we get back the binary -- binary is handled with nodeJS 'buffer' class
fs.readFile("./lib/sayings.md", "UTF-8", function(err, contents) {
	if(err) {
		console.log(err); // this shows there was error but does not kill process
	}

	console.log(contents);

}); 

*/