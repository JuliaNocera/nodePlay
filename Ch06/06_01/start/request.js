// http request 

// https but would be the same with http 
var https = require("https");
var fs = require("fs");

var options = {
	hostname: "en.wikipedia.org", 
	port: 443, // this is the default port for most public sites
	path: "/wiki/George_Washington", 
	mehtod: "GET"
};

var req = https.request(options, function(res) {
	var resBody = "";
	console.log("started... ");
	console.log(`Server Status: ${res.statusCode} `);
	console.log("Res Headers: %j", res.headers);

	res.setEncoding("UTF-8");

	res.once("data", function(chunk) {
		console.log(chunk);
	});

	res.on("data", function(chunk) {
		console.log(`--chunk-- ${chunk.length}`);
		resBody += chunk;
	});

	res.on("end", function() {
		fs.writeFile("georgewashington.html", resBody, function(err) {
			if(err){
				throw err;
			} else {
				console.log("successful download");
			}
		})
	})

});

req.on("error", function(err) {
	console.log(`problem with request: ${err.message}`)
});

req.end();

