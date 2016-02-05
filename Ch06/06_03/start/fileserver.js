// building a web server

var http = require("http");
var fs = require("fs");
var path = require("path");

http.createServer(function(req, res) {
	console.log(`${req.method} request for ${req.url}`);
	// when navigating to home page :
	if (req.url === "/") {
		// read the index file to be served for home page but this page requests all other files that it needs such as our image
		fs.readFile("./public/index.html", "UTF-8", function(err, html) {
			res.writeHead(200, {"Content-type": "text/html"});
			// send html back to browser
			res.end(html);
		})
	}	else if (req.url.match(/.css$/)) { // using Regex
			// get css path
			var cssPath = path.join(__dirname, 'public', req.url);
			// create a file stream
			var fileStream = fs.createReadStream(cssPath, "UTF-8");

			res.writeHead(200, {"Content-Type": "text/css"});

			// we can pipe the stream to the response in bits -- we are piping a readable stream to a writeable stream using '.pipe()'
			fileStream.pipe(res); // this will handle chunking the data and all that jazz
	} else if (req.url.match(/.jpg$/)) { // using Regex
		var imgPath = path.join(__dirname, 'public', req.url);
		var imgStream = fs.createReadStream(imgPath);

		res.writeHead(200, {"Content-Type": "image/jpg"});
		imgStream.pipe(res);

	} else {
		res.writeHead(404, {"Content-Type": "text/plain"});
		res.end("404 Not Found");
	}

}).listen(3000);

console.log("Listening on port 3000");

