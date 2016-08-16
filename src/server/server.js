const http = require('http');
const express = require('express');
//var routes = require('./routes');
//var user = require('./routes/user');
const path = require('path');

const favicon = require('serve-favicon');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const errorHandler = require('errorhandler');
const mongoose = require('mongoose');
const restify = require('express-restify-mongoose');
const Wine = require('./models/wine');

var app = express();
var router = express.Router();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(favicon(__dirname + '/../favicon.ico'));
app.use(logger('dev'));
app.use(methodOverride());
app.use(session({ resave: true,
                  saveUninitialized: true,
                  secret: '9823958935802395823049' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(multer());
app.use(express.static(path.join(__dirname,'/../')));

app.route('/')
  .get((req, res) => {
    res.sendFile(path.join(__dirname,'/../index.html'));
  });

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/wine');

restify.serve(router, Wine)
//restify.serve(router, Wine);

app.use(router);

// error handling middleware should be loaded after the loading the routes
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
