var server = require("./lib/server.js");
var router = require("./lib/router.js");
var requestHandlers = require("./lib/requestHandlers.js");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;

server.start(router.route, handle);