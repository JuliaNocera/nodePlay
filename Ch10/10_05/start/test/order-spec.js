var expect = require("chai").expect;
var rewire = require("rewire");

var order = rewire("../lib/order");
var sinon = require("sinon");

describe("Ordering Items", function() {

	beforeEach(function() {

		this.testData = [
			{sku: "AAA", qty: 10},
			{sku: "BBB", qty: 0},
			{sku: "CCC", qty: 3}
		];

		this.console = {
			log: sinon.spy() // will give us details about the log call
		}
		order.__set__("inventoryData", this.testData); // sets inventoryData from order.js file to our testData
		order.__set__("console", this.console); // replaces console with our mock console

	});

	it("order an item when there are enough in stock", function(done) {

		var _this = this; // protect scope -- this refers to actual Mocha object and _this is the obj we can use when we go into callback (f) below

		order.orderItem("CCC", 3, function() {
			expect(_this.console.log.callCount).to.equal(2); // checks that console.log fires twice from order.js on order()
			done();
		});

	});

});