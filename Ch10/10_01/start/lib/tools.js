// used in test/tools-speec.js file
module.exports = {
	
	printName(person) {  // this is a new way of defining functions in an object literal in ES6 called "Object Literal Enhancments"
		return `${person.last}, ${person.first}`;
	}

}