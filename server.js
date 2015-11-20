var app = require('express')();
var server = require('http').Server(app);
var express = require('express');
var io = require('socket.io')(server);

var routes = require('./routes');

server.listen(3000);

app.use('/',routes);