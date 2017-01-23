'use strict';

//Modules
const express  = require('express'); 
const mongoose = require('mongoose'); 

//Application
const app     = express();
const port    = 8080;

//Routes
var notes = require('./routes/notes');//(app);

//View Engine Setup
app.set('view engine', 'pug');


app.use(express.static('public'));
app.use('/', notes);


//const Server  = require('./server/index.js');



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


//app.get('/', function(req, res){
//  res.render('index', {
//    //title: 'Testing title', message: 'Testing message'
//  });
//});

app.listen(port);
console.log('Running on port ' + port);
