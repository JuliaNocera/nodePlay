var expect = require("chai").expect;
var rewire = require("rewire"); // this requires our S.U.T. with a method that lets us inject our own private vairables in the module
var order = rewire("../lib/order"); // here we use rewire 

describe("Ordering Items", function() {

	beforeEach(function() {
		// we only need the product skew and quantity for this test
		this.testData = [  
			{sku: "AAA", qty:10},
			{sku: "BBB", qty: 0},
			{sku: "CCC", qty: 3}
		]; // to inject testData we will use rewire

		// we want to set the private variable to inventoryData from order.js which was loaded with rewire at top of this file
		order.__set__("inventoryData", this.testData); // since testData is on 'this' - this is the Mocha test obj
	});

	it("order an item when there are enough in stock", function(done){
		order.orderItem("CCC", 3, function() {
			done();
		});
	});
});