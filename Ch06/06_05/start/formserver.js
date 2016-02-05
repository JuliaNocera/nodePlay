// creating a server that handles POST, GET, and more
// form.html has an action of "/" and a post method
var http = require("http");
var fs = require("fs");

http.createServer(function(req, res) {
	if(req.method == "GET") { // if get serve main html file
		res.writeHead(200, {"Content-Type": "text/html"});
		fs.createReadStream("./public/form.html", "UTF-8").pipe(res)	
	} else if (req.method === "POST") {  // if post, pass back a custom html response by grabbing data
		var body = "";
		req.on("data", function(chunk) {
			body += chunk;
		});
		req.on("end", function() {
			res.writeHead(200, {"Content-Type": "text/html"});
			res.end(`
				<!DOCTYPE html>
				<html>
					<head>
						<title>Results</title>
					</head>
					<body>
						<h1> Your Form Results </h1>
						<p>${body}</p>
					</body>
				</html>
			`)
		})
	}

}).listen(3000);

console.log("handling Post reqs on port 3000")