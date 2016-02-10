// testing Express and http methods
var request = require("supertest"); // this is a function to make requests on http
var expect = require('chai').expect;
var rewire = require('rewire');
var app = rewire('../app'); // exported on module.exports in app.js file at bottom

describe("Dictionary App", function () {

    it("Loads the home page", function(done) {
        request(app).get("/").expect(200).end(done); // .end() takes in callback function to invoke when test is finished
    });

    describe("Dictionary API", function () {

        beforeEach(function () {

        	this.defs = [
                {
                    term: "One",
                    defined: "Term One Defined"
                },
                {
                    term: "Two",
                    defined: "Term Two Defined"
                }
            ];

            app.__set__("skierTerms", this.defs); // replace with our fake data so we know what terms and how many we should see
        });

        it("GETS dictionary-api", function(done) {
            request(app).get("/dictionary-api").expect(200).end(done);
        });

        it("POSTS dictionary-api", function(done) {
            request(app)
                .post("/dictionary-api")
                .send({"term": "Three", "defined": "Term Three Defined"})
                .expect(200)
                .end(done);
        });

        it("DELETES dictionary-api", function(done) {
            request(app)
                .delete("/dictionary-api/One") // term One is defined in our fake data
                .expect(200)
                .end(done);
        });

    });

});