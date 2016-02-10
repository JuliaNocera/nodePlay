// handle POST and DELETE requests
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();

var skierTerms = [
    {
        term: "Rip",
        defined: "To move at a high rate of speed"
    },
    {
        term: "Huck",
        defined: "To throw your body off of something, usually a natural feature like a cliff"
    },
    {
        term: "Chowder",
        defined: "Powder after it has been sufficiently skied"
    }
];

app.use(bodyParser.json()); // parse json data that is sent to our api
app.use(bodyParser.urlencoded({extended: false})); // if it was url encoded we are parsing -- extended: true if you have large amounts of nested data

app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`); // the stringified body shows the data that was sent
	next();
});

app.use(express.static("./public"));

app.use(cors());

app.get("/dictionary-api", function(req, res) {
	res.json(skierTerms);
});

// post data 
app.post("/dictionary-api", function(req, res) {
    skierTerms.push(req.body); // push data
    res.json(skierTerms); // return newly formed data
});

// delete note: routing parameter called term -- value is whatever term is on after dictionary-api/
app.delete("/dictionary-api/:term", function(req, res) { 
    // req.params.term this is the term value on the params
    skierTerms = skierTerms.filter(function(definition) {
        return definition.term.toLowerCase() !== req.params.term.toLowerCase(); // filters any terms out of skier array that matches term on req
    })
    res.json(skierTerms); 
}); 

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;