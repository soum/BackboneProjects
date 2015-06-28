

var fs = require('fs');
fs.readFile('index.html', function (err, html) {
	var sys = require("sys"),
	my_http = require("http");
	if (err) {
        throw err; 
    } 
	my_http.createServer(function(request,response){
	    //writing response
	    response.writeHeader(200, {"Content-Type": "text/html"});
	    response.write(html); 
	    response.end();
	}).listen(8080, '127.0.0.1');
	console.log("Server Running on 8080"); 

})