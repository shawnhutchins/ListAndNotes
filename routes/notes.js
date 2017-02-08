'use strict';
var express = require('express');
var router = express.Router();

var mNote = require('../models/note');

//middleware


//routes

router.post('/save', function(req, res) {
  console.log(req.body);

  var newNote = mNote({
    name: 'testing save route',
    note: req.body.note
  });

  newNote.save(function(err) {
    if (err) {
      throw err;
    }
    console.log('Note Saved!');
  });

  res.redirect('/notes');
});

router.get('/', function(req, res){

  mNote.find({}, function(err, notesFound) {
    if (err) {
      throw err;
    }

    res.render('notes', {
      notesFound: notesFound,
    });
  });
});

module.exports = router;
