// looking deeper in test values 
var cheerio = require("cheerio");
var request = require("supertest");
var expect = require('chai').expect;
var rewire = require('rewire');
var app = rewire('../app');

describe("Dictionary App", function () {

    it("Loads the home page", function(done) {
        request(app).get("/").expect(200).end(function(err, res) {
          // in this case the response text is HTML -- we can use Cheerio module to search the DOM like we can with jquery
          var $ = cheerio.load(res.text);
          var pageHeading = $("body>h1:first-child").text();
          expect(pageHeading).to.equal("Skier Dictionary");
          done();
        });
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

            app.__set__("skierTerms", this.defs);
        });

        it("GETS dictionary-api", function(done) {
            var defs = this.defs; // so that the definitions to get lost in the callback (f)
            request(app).get("/dictionary-api").expect(200).end(function(err, res) {
              var terms = JSON.parse(res.text);
              expect(terms).to.deep.equal(defs); // now we are checking the data 
              done(); // tell mocha test is finished
            });
        });

        it("POSTS dictionary-api", function(done) {
            request(app)
               .post("/dictionary-api")
               .send({ "term": "Three", "defined": "Term Three Defined"})
               .expect(200)
               .end(done);
        });

        it("DELETES dictionary-api", function(done) {
            request(app)
               .delete("/dictionary-api/One")
               .expect(200)
               .end(done);
        });

    });

});