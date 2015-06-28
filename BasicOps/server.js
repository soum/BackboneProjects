//var my_http = require('http');
var fs = require('fs');
fs.readFile('index.html', function (err, html) {
	var sys = require("sys"),
	my_http = require("http");
	if (err) {
        throw err; 
    } 
	my_http.createServer(function(request,response){
	    //sys.puts("I got kicked");
	    response.writeHeader(200, {"Content-Type": "text/html"});
	    response.write(html); 
	    response.end();
	}).listen(8080, '127.0.0.1');
	console.log("Server Running on 8080"); 

})