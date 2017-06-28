'use strict';
var express = require('express');
var router = express.Router();

var mNote = require('../models/note');

//middleware
router.use(function(req, res, next) {
  console.log('Inside the notes api!');
  next();
});


//routes

router.get('/', function(req, res) {
  //render new notes page
  res.render('notes'); 
});


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

  res.redirect('/');
});


router.post('/saveEdit', function(req, res) { 
  console.log(req.body.noteId);
  mNote.update({ '_id': req.body.noteId }, 
    { $set: { note: req.body.note } },
    function (err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
    });
  res.redirect('/');
});


router.get('/:note_id', function(req, res) {
  mNote.findById(req.params.note_id, function(err, note) {
    if (err) {
      throw err;
    }
  
    res.render('notesEdit', {
      note: note,
    });
    //res.json(note);  
  });
});

module.exports = router;
