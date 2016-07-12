// Program: server.js
// Purpose: startup program for NodeJS web server
// Author:  Masaki Kakoi
// Updated: Jul 12, 2016
// License: MIT license
//
var express = require('express');

var server = express();
server.use(express.static(__dirname + '/'));

var port = process.env.PORT || 3000;
server.listen(port, function() {
   console.log('NodeJS Web server listening on port ' + port);
});
