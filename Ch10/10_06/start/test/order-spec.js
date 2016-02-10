// tests order.js 
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
			log: sinon.spy()
		};

		this.warehouse = {
			// .yields() lets us input what we want to be returned by the stub
			packageAndShip: sinon.stub().yields(10987654321) // we can tell this stub that it should invoke and send a fake tracking number with the packageAndShip(f)
		}

		order.__set__("inventoryData", this.testData);
		order.__set__("console", this.console);
		order.__set__("warehouse", this.warehouse);

	});

	it("order an item when there are enough in stock", function(done) {

		var _this = this;

		order.orderItem("CCC", 3, function() {

			expect(_this.console.log.callCount).to.equal(2);

			done();
		});

	});

	describe("Warehouse interaction", function() {

		beforeEach(function() {
			this.callback = sinon.spy();

			// fake data means we know what the data will be 
			order.orderItem("CCC", 2, this.callback);
		});

		it("recieves a tracking number", function() {
			expect(this.callback.calledWith(10987654321)).to.equal(true);
		});

		it("calls packageAndShip with the correct quantity", function() {
			expect(this.warehouse.packageAndShip.calledWith("CCC", 2)).to.equal(true);
		});


	});







});