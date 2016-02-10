// adding data and cors request handling
var express = require("express");
var cors = express("cors"); // function that returns middleware
var app = express();

var skierTerms = [
	{
		term: "Rip",
		defined: "To move at a high rate of speed"
	}, 
	{
		term: "Huck",
		defined: "To throw your body off something like a cliff"
	},
	{
		term: "Chowder",
		defined: "Powder after its sufficiently skied"
	}
];


app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}'`);
	next();
});

app.use(express.static("./public"));

app.use(cors()); // this adds the cors which means that any domain can make a request for dictionary-api

app.get("/dictionary-api", function(req, res) {
	res.json(skierTerms);
}); // sets up a GET route with (location, function to handle requests for route (req, res))

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;