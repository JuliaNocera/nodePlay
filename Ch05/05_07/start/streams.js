// read chat log 
var fs = require("fs");

// with this stream we can start reading small chuncks instead of waiting for all data 
var stream = fs.createReadStream("./chat.log", "UTF-8");

var data = "";

// very first data event calls this function
stream.once("data", function() {
	console.log("\n\n\n");
	console.log("Started...");
	console.log("\n\n\n");
})

// when data event is raised it means we have a small chunk of the file
stream.on("data", function(chunk) {
	process.stdout.write(`    chunk: ${chunk.length} |`);
	data += chunk;
});


// on end of stream
stream.on("end", function(){
	console.log("\n\n\n");
	console.log(`Finished... ${data.length}`);
	console.log("\n\n\n");
})
