//Timing Functions
// writes a wait percent to terminal


var waitTime = 3000;
var currentTime = 0;
var waitInterval = 30;
var percentWaited = 0;

function writeWaitingPercent(p) {
	process.stdout.clearLine(); //clears last line in terminal
	process.stdout.cursorTo(0);
	process.stdout.write(`waiting ... ${p}%`);
}
var interval = setInterval(function() {
	currentTime += waitInterval;
	percentWaited = Math.floor((currentTime/waitTime) * 100);
	writeWaitingPercent(percentWaited);
}, waitInterval);

setTimeout(function() {
	clearInterval(interval) // this stops the interval from running
	writeWaitingPercent(100);
	console.log("done");
}, waitTime);

process.stdout.write("\n\n");
writeWaitingPercent(percentWaited);