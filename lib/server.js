var http = require('http')
var url = require("url");
var port = process.env.PORT || 1337;

function start(route, handle){
    function onRequest(request, response){
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        //console.log("Request for: " + pathname + " revcieved");
        
        request.setEncoding("utf8");
        request.addListener("data", function(postDataChunk){
                postData += postDataChunk;
                console.log("Chunk of postData was recieved: " + postDataChunk + " <end>.");
            });
        request.addListener("end", function(){
                route(handle, pathname, response, postData);
            });
    }

http.createServer(onRequest).listen(port);

console.log("Server has started on port: " + port);
}

exports.start = start;