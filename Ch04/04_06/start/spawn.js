var spawn = require("child_process").spawn;

var cp = spawn("node", ["alwaysTalking"]);

cp.stdout.on('data', function(data) {
	console.log(`STDOUT: ${data.toString()}`);
});

cp.on('close', function() { // logs when process has ended 
	console.log("Child Prcess has ended");
	process.exit();
});
 
setTimeout(function() {  // this triggers the stdout.on('data') and stops the app
	cp.stdin.write("stop");
}, 4000);
