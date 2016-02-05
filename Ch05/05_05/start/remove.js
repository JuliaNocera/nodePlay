//remove files

var fs = require("fs");

try {
	fs.unlinkSync("./lib/congif.json");
} catch(err) {
	console.log(err);
}

fs.unlink("notes.md", function(err) {
	if(err) {
		console.log(err);
	} else {
		console.log("Notes removed");
	}
});


