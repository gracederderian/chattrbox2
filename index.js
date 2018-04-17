var http = require("http");
var fs = require("fs");
//var path = require("path");
var extract = require("./extract");
/*eslint-disable no-unused-vars*/
var wss = require("./websockets-server");
var mime = require("mime");
var errorPath = "app/error.html";

var handleError = function(err, res) {
  fs.readFile(errorPath, function(err, data) {
    res.writeHead(400, {
      "Content-Type": mime.getType(errorPath)
    });
    res.write(data);
    res.end();
  });
};

var server = http.createServer(function(req, res) {
  console.log("Responding to a request.");
  //var url = req.url;

  /*var fileName = "index.html";
  if (url.length > 1) {
    fileName = url.substring(1);
  }
  console.log(fileName);
  var filePath = path.resolve(__dirname, "app", fileName);
  res.end("<h1>Hello, World!!</h1>");*/

  var filePath = extract(req.url);
  fs.readFile(filePath, function(err, data) {
    if (err) {
      handleError(err, res);
      return;
    } else {
      res.setHeader("Content-Type", mime.getType(filePath));
      res.end(data);
    }
  });
});
server.listen(3000);
