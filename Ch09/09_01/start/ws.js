// setting up web sockets

var webSocketServer = require("ws").Server;
var wss = new webSocketServer({ port: 3000 });

wss.on("connection", function(ws) { // fires when new socket connects 
	// send message back to new client after connection
	ws.send("Welcome to cyber chat!");
});

