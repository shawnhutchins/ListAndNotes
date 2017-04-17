'use strict';
var express = require('express');
var router = express.Router();

var mNote = require('../models/note');

//middleware


//routes
router.get('/', function(req, res){
  mNote.find({}, function(err, notesFound) {
    if (err) {
      throw err;
    }
    
    res.render('dash', {
      notesFound: notesFound,
    });
  });
});

module.exports = router;
