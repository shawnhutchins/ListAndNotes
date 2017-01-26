'use strict';
var express = require('express');
var router = express.Router();

var mNote = require('../models/note');

//middleware


//routes
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

  mNote.find({}, function(err, notes) {
    if (err) {
      throw err;
    }

    console.log(notes);

    res.render('notes', {
      notes: JSON.stringify(notes.name)
    });
  });
});

module.exports = router;
