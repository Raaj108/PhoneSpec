var http = require("http");
var fs = require("fs");
var path = require("path");
var mime = require("mime");
//handle the sending of 404 error, which usually appears when requested file doesn't exist
function send404(response) {
  response.writeHead(404, {
    "Content-type": "text/plain"
  });
  response.write("Error 404: resource not found");
  response.end();
}
//sends the contents of the file
function sendPage(response, filePath, fileContents) {
  response.writeHead(200, {
    "Content-type": mime.lookup(path.basename(filePath))
  });
  response.end(fileContents);
}
//define how our server will handle responses
function serverWorking(response, absPath) {
  fs.exists(absPath, function (exists) {
    if (exists) {
      fs.readFile(absPath, function (err, data) {
        if (err) {
          send404(response)
        } else {
          sendPage(response, absPath, data);
        }
      });
    } else {
      send404(response);
    }
  });
}
//create the HTTP server:
var server = http.createServer(function (request, response) {
  var filePath = false;
  if (request.url == '/') {
    filePath = "index.html";
  } else {
    filePath = "/" + request.url;
  }
  var absPath = "./" + filePath;
  serverWorking(response, absPath);
});
var port_number = process.env.PORT || 4000;
server.listen(port_number);
console.log("Listening on " + port_number);