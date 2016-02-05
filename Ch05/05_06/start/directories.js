var fs = require("fs")


// moves directory :
// fs.renameSync("./assets/logs", "./logs");
// console.log("success");

// fs.rmdir("./assets", function(err) {

// 	if(err){
// 		throw err;
// 	}

// 	console.log("Assets removed");

// });

// we have to move or remove all files in a directory so here we go through all files in logs and then below remove logs dir
fs.readdir("./logs").forEach(function(fileName) {

	fs.unlink("./logs" + fileName);

})

// removes logs 
fs.rmdir("./logs", function(err) {
	
	if(err) {
		throw err;
	}

	console.log("logs removed");

});