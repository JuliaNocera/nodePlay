var sayings = [
    "You may delay, but time will not.",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    "It takes many good deeds to build a good reputation, and only one bad one to lose it.",
    "Early to bed and early to rise makes a man healthy, wealthy and wise.",
    "By failing to prepare, you are preparing to fail.",
    "An investment in knowledge pays the best interest.",
    "Well done is better than well said."
];

// lists the output in a large and long stream     spawn is good for this whereas exec is good for short data chunks
var interval = setInterval(function() { 
	var i = Math.floor(Math.random() * sayings.length);
	process.stdout.write(`${sayings[i]} \n`);
}, 1000);

process.stdin.on('data', function(data) { // when data is sent to this app with a stdin
	console.log(`STDIN Data Recieved -> ${data.toString().trim()}`);
	clearInterval(interval);
	process.exit();
});