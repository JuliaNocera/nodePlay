var fs = require("fs");

// create some markdown saved as the value of a var
// using string template ticks (``) is nice because they honor white space
var md = `       
Sample MarkDown File
====================

Sample Sub
----------

* point 
* pointb
* pointc

`;

fs.writeFile("sample.md", md.trim(), function(err) {
	console.log("file created")
})