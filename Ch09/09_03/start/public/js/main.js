
var socket = io("http://localhost:3000"); // create a new socket instance -- send link to where socket.io is running

socket.on("disconnect", function() { // disconnect the client socket connection 
	setTitle("Disconnected");
});

socket.on("connect", function() {  // when there is a new socket connection
	setTitle("Connected to Cyber Chat");
});

socket.on("message", function(message) { // message event is a custom event we emitted from server
	printMessage(message);
});

document.forms[0].onsubmit = function () {  // gather and print to DOM when user submmits a message
    var input = document.getElementById("message");
    printMessage(input.value);
    socket.emit("chat", input.value); // we emit a chat event back to the server
    input.value = '';
};

function setTitle(title) {
    document.querySelector("h1").innerHTML = title;
}

function printMessage(message) {
    var p = document.createElement("p");
    p.innerText = message;
    document.querySelector("div.messages").appendChild(p);
}
