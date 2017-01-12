'use strict';

const express = require('express'); //the web server
const mongoose = require('mongoose'); //
const fs = require('fs');

const app     = express();
const port    = 8080;

var self = this;

//load routes
var routePath = __dirname + '/routes/';
var routes = [];

console.log('Loading Routes');

fs.readdirSync(routePath).forEach(function(file) {
  var route = routePath + file;
  var routeName = file.split('.')[0];

  routes[routeName] = require(route)(self.app);
});

console.log(routes);

//const Server  = require('./server/index.js');

app.use(express.static('public'));

app.set('view engine', 'pug');

mongoose.connect('mongodb://localhost/listandnote');

//include the note model
//var Note = require('./server/models/note.js');

// create a note
//var newNote = Note({
//  name: 'Shawns Note',
//  note: 'this is my note. It isent that long but its my note just the same.'
//});

//newNote.save(function(err) {
//  if (err) {
//    throw err;
//  }

//  console.log('Note Created!');
//});

//look for all notes
//Note.find({}, function(err, notes) {
//  if (err) {
//    throw err;
//  }

  //console.log(notes);
//});


app.get('/', function(req, res){
  res.render('index', {
    //title: 'Testing title', message: 'Testing message'
  });
});

app.listen(port);
console.log('Running on port ' + port);
