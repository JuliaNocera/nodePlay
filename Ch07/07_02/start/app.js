/* jshint esnext: true */
// running node with node-dev and jshint
// to use template string in jshint --> simply type line 1 in a comment at the top of a file


var http = require("http");


http.createServer(function(req, res) {

   res.writeHead(200, {"Content-Type": "text/html"});
   res.end(`<!DOCTYPE html>
     <html>
       <head>
         <title>Web Server</title>
       </head>
       <body>
         <h1>Hello World et ALL</h1>
     </html> 
   `);

}).listen(3000);

console.log("Server running at http://localhost:3000");
