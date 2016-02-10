// setting up a Mocha test
// expect, should, assert with Chai
var expect = require("chai").expect;
var tools = require("../lib/tools") // custom module for printName function 

describe("Tools", function() {
	describe("printName()", function() {
		it("should print last name first", function() {  // stub test with it statment 
			var results = tools.printName({first: "Alex", last: "Banks"});
			expect(results).to.equal("Banks, Alex");
		}); 
	});

	describe("loadWiki()", function() {
		it("Load abraham lincoln's wiki page");
	})

})

