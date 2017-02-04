'use strict';

//Modules
const express  = require('express'); 
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');

//Application
const app     = express();
const port    = 8080;

//Models
//var mNote = require('./models/note');

//Routes
var rRoute = require('./routes/route');
var rNotes = require('./routes/notes');

//View Engine Setup
app.set('view engine', 'pug');


app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', rRoute);
app.use('/notes', rNotes);


mongoose.connect('mongodb://localhost/listandnote');


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
