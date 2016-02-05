// we will use http, if with https you need a security certificate

var http = require("http");

// http.createServer will have a cb function which has the request information passed in
// everytime we make a request, we get info about request headers, data with req, and user(environment for ex);
// also with this function is the response, we have to write the response
var server = http.createServer(function(req, res) {

	res.writeHead(200, {"Content-type": "text/html"})
	res.end(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>HTML REPONSE</title>
			</head>
			<body>
				<h1>Serving HTML Tex</h1>
				<p>${req.url}</p>    // this will be / meaning the home page but if we put a /style.css thats what it would be and then we find the file and serve it 
				<p>${req.method}</p> // this will be GET
			</body>
		<html>
	`);

});

// we can specify ip address and incoming port for all web reqs for this server so this server will listen to any requests on this machine for port 3000
server.listen(3000);
console.log("Server listening on port 3000");

