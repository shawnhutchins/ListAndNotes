'use strict';

const express = require('express');
const mongoose = require('mongoose');
const app     = express();
const port    = 8080;

const Server  = require('./server/index.js');

mongoose.connect('mongodb://localhost/listandnote');
//include the note model
var Note = require('./server/models/note.js');
// create a note
var newNote = Note({
  name: 'Shawns Note',
  note: 'this is my note. It isent that long but its my note just the same. I like my note, it is nice!'
});

newNote.save(function(err) {
  if (err) {
    throw err;
  }

  console.log('Note Created!');
});
//look for all notes
Note.find({}, function(err, notes) {
  if (err) {
    throw err;
  }

  console.log(notes);
});


app.get('/', function(req, res){
  res.send('Hello World');
});

app.listen(port);
console.log('Running on port ' + port);
