'use strict';
var express = require('express');
var router = express.Router();

var mNote = require('../models/note');

//middleware


//routes

router.post('/notesubmit', function(req, res) {
  console.log(req.body);
  res.render('notes');
});

router.get('/', function(req, res){

/* //uncomment to make a test note
  var newNote = mNote({
    name: 'Shawns Note',
    note: 'This is my first note that I am using for testing my notes view.'
  });

  newNote.save(function(err) {
    if (err) {
      throw err;
    }
    console.log('Note Created!');
  });
*/

  mNote.find({}, function(err, notesFound) {
    if (err) {
      throw err;
    }

    //var notesF = notesFound[0];

    res.render('notes', {
      notesFound: notesFound[0],
    });
  });
});

module.exports = router;
