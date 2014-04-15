//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');

var async = require('async');
var socketio = require('socket.io');
var express = require('express');

//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
var server = http.createServer(router);
var io = socketio.listen(server);


router.use(express.static(path.resolve(__dirname, 'views')));


router.set('view engine', 'html');
router.engine('html', require('hbs').__express);

router.get('/', function(req, res) {

    res.render('index');
});

router.get('/news', function(req, res) {

    res.render('index_news');
});

router.get('/about', function(req, res) {
    res.render('index_about');
});

router.get('/findus', function(req, res) {
    res.render('find');
});

router.get('/helpus', function(req, res) {
    res.render('index_helpus');
});


server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
