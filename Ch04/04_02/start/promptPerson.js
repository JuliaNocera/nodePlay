// Readline module
//read and record responses and prompt again


var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

var realPerson = {
	name: '', 
	sayings: []
};


rl.question("what is the name? ", function(answer) {
	
	realPerson.name = answer;

	rl.setPrompt(`What would ${realPerson.name} say? `);

	rl.prompt();

	rl.on('line', function(saying){
		
		realPerson.sayings.push(saying.trim());	

		if(saying.toLowerCase().trim() === 'exit') { //if the response is 'exit', close the process
			rl.close();
		}	else {
			rl.setPrompt(`what else would ${realPerson.name} say? ('exit' to leave) `);		
			rl.prompt();
		}

	});
});


rl.on('close', function() {
	console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings) // "%s" is a string holder, %j is JSON --> this line will show all sayings recorded
	process.exit();
})