// open two instances of index.html by simpling opening with file api (open/run in sublime) 
//to test this out

var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({ port: 3000 });

wss.on("connection", function(ws) {

	ws.on("message", function(message) {  // listen for any messages from browser to socket server

		if (message === 'exit') {  // disconnect the client
			ws.close(); // this disconnects this client but leaves the socket open for other clients
		} else {
 
			wss.clients.forEach(function(client) { // broadcast message to all clients wss.clients === an array of all web sockets so we can forEach on every client and send info 
				client.send(message); // sending the chat message to all client instances 
			});

		}

	});

	ws.send("Welcome to cyber chat");

});