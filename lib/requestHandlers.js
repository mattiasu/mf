var querystring = require("querystring");

function start(response, postData){

	response.writeHead(200, { 'Content-Type': 'text/plain' });
	response.write("inside handler");
	response.end();
}

exports.start = start;