var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require('fs');

var realPerson = {
	name: '',
	sayings: []
};

rl.question("what is the name of a real person? ", function(answer) {
	realPerson.name = answer;

	// TODO: create a new MarkDown file
	fs.writeFileSync(realPerson.name + ".md", `${realPerson.name}\n==============\n\n`);  // 2fold: small app no prob but also this way we know we have the file before we try to append to it

	rl.setPrompt(`What would ${realPerson.name} say? `);
	rl.prompt();

	rl.on('line', function(saying) {
		realPerson.sayings.push(saying.trim());

		//TODO: Append sayings to that markdown file
		fs.appendFile(realPerson.name + ".md", `* ${saying.trim()} \n`);


	})

})