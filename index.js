/* Get dependencies */
var express = require('express');
var http = require('http');
var path = require('path');
var socketio = require('socket.io');

/* Start Express */
var app = express();

/* Template engine */
app.set('view engine', 'jade');

/* Views location */
app.set('views', path.join(__dirname, 'views'));

/* Logger */
app.use(express.logger('dev'));

/* Automatically encode/decode URL */
app.use(express.urlencoded());

/* Use our routes */
app.use(app.router);

/* Use static server */
app.use(express.static(path.join(__dirname, 'public')));

/* ROUTES */
app.get('/', function (req, res) {
  res.render('index');
});

app.get('/friends', function (req, res) {
  res.render('friends');
});

app.get('/me', function (req, res) {
  res.render('me');
});

/* Start HTTP server */
var server = http.createServer(app).listen(3000, function () {
  console.log('Connected');
});

var io = socketio.listen(server);

io.sockets.on('connection', function (socket) {
  console.log('Socket IO server connected with client');
});