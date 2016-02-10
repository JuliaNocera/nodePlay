var expect = require("chai").expect;
var tools = require("../lib/tools");

describe("Tools", function(){

	describe("printName()", function() {
		it("should print the last name first", function() {
			var results = tools.printName({ first: "Alex", last: "Banks"});
			expect(results).to.equal("Banks, Alex");
		});
	});
	
	describe("loadWiki", function (){ // this is an async test -- we have to wait for callback() to run
		this.setTimeout(500);
		it("Should load Abraham Lincoln's wiki page", function(done) { // done becomes a (f) that waits to run test until it is done
			tools.loadWiki({first: "Abraham", last: "Lincoln"}, function(html) {
				expect(html).to.be.ok;  // checks if function is invoked and we have an html var 
				done(); // invoke done() which auto timesout at 2 seconds
				// if it would take more than 2 secs you can set timeout (line 14) before it()
			})
		});
	});
});