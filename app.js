// bring in the node modules we're going to use
var express = require('express')
var http = require('http');
var path = require('path');
var routes = require('./routes');
var nunjucks = require('nunjucks');

// the express app instance
var app = express();

// nunjucks
app.set('view engine', 'html');
var env = nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true
});

// app.use(cookieParser());
// use less middleware so that our LESS automatically compiles to CSS
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

//  routes/index.js is where all the fun happens
app.get('/', routes.index);

// create a server from the express app
var server = http.Server(app);

// run the server
server.listen(3000);
// error handling
server.on('error', function(error) {
  console.error(error);
});
// this function is called when the server starts
server.on('listening', function() {
  console.log('The server is running at http://localhost:3000');
});