var questions = [
	"what is you name?", 
	"Fav hobby?", 
	"preffered programming lang?"
]

var answers = [];

function ask(i) {
	process.stdout.write(`\n\n\n\n ${questions[i]}`);
	process.stdout.write("  >  ");
}

process.stdin.on('data', function(data) { // event listener for when when user types info and presses enter
	//process.stdout.write('\n' + data.toString().trim() + '\n'); //trim to get rid of trailing chars
	answers.push(data.toString().trim());

	if(answers.length < questions.length) {
		ask(answers.length);
	} else {
		process.exit();
	}

}) 

process.on('exit', function() {
	process.stdout.write("\n\n\n")
	process.stdout.write(`Go ${answers[1]} ${answers[0]} you can write ${answers[2]} later`)
	process.stdout.write("\n\n\n")
});

ask(0);