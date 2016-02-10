// setting up Express    later we set up an api to serve dictionary
var express = require("express");

var app = express(); // creates new instance of express app

app.use(function(req, res, next) { // next is a function 
	console.log(`${req.method} request for ${req.url}`);
	next(); // tells app to keep going to send response back using the .static()
}); // app.use() used for writing a custom middleware to log methods and reqs on requests

app.use(express.static("./public")); // express.static() is a piece of middleware that seerves files from public dir

app.listen(3000); // listen on port 3000

console.log("Express app running on Port 3000");

module.exports = app; // include this as a module so it can be used elsewhere (testing for example)



