var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {

    response.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile('./index1.html', null, function (error, data) {
        if (error) {
            response.write('<center><h1>The File you are requesting is not found 	&#128532;</h1></center>');
        } else {
            response.write(data)
        }
        response.end()
    })
});
server.listen(process.env.PORT || 3000, () => console.log("Server started! Listening to port 3000!!"));

