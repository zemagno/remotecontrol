var app = require('express')();
var server = require('http').Server(app);
var express = require('express');
var io = require('socket.io')(server);
var cors = require('cors')

//console.log("Iniciando. Listen port 3000...");

app.use(cors());

var routes = require('./routes');

server.listen(3000);

app.use('/',routes);

// var handleClient = function (socket) {
//     // we've got a client connection
//     // socket.emit("tweet", {user: "nodesource", text: "Hello, world!"});
//     console.log("conexao...");
// };

// var receiveByteIo = function (data) {
//     // we've got a client connection
//     console.log("recebi cmd..")
//     console.log(data)
// };

// io.on("connection", handleClient);
// io.on("message",receiveByteIo);


