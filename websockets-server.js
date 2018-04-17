var WebSocket = require("ws");
var WebSocketServer = WebSocket.Server;
var port = 3001;
var ws = new WebSocketServer({
  port: port
});
var messages = [];
var topic = "";

console.log("websockets server started");

ws.on("connection", function(socket) {
  console.log("client connection established");

  if (topic) {
    socket.send("*** Topic is '" + topic + "'");
  }

  messages.forEach(function(msg) {
    socket.send(msg);
  });

  socket.on("message", function(data) {
    console.log("message recieved: " + data);

    if (data.startsWith("/topic")) {
      var newTopic = "*** Topic has changed to " + "'" + data.substring(7, data.length) + "'";
      topic = data.substring(7, data.length);
      ws.clients.forEach(function(clientSocket) {
        clientSocket.send(newTopic);
      });
    } else {
      messages.push(data);
      ws.clients.forEach(function(clientSocket) {
        clientSocket.send(data);
      });
    }
    //socket.send(data);
  });

});
