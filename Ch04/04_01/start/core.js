//Core modules (ie. modules that come loaded with Node and npm)

var util = require('util'); // module that logs the current date and time something is logged to the terminal
var path = require('path');
var v8 = require('v8');

util.log(path.basename(__filename));

var dirUploads = path.join(__dirname, 'www', 'files', 'uploads'); // joins path name of directory with www/files/uploads attached

util.log(dirUploads);

util.log(v8.getHeapStatistics()) //gives current info on current memory usage stats
;

