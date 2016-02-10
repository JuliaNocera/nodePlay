// set up for server 
var express = require("express"); 
var http = require("http");
var app = express();
var server = http.createServer(app).listen(3000); // instead of using callback use express app so it works with socket.io
var io = require("socket.io")(server); // socket.io is a function so you send the server that it should listen for connects on 

app.use(express.static("./public")); // static serving files from public folder 

io.on("connection", function(socket) { // listens for incoming socket.io connection

    socket.on("chat", function(message) {
    	socket.broadcast.emit("message", message); // broadcast to all socket connections
    });

	socket.emit("message", "Welcome to Cyber Chat"); // as soon as client connects, emit a socket event with a welcome message when a message is sent 

});

console.log("Starting Socket App - http://localhost:3000");