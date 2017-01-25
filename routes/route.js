'use strict';
var express = require('express');
var router = express.Router();

//middleware


//routes
router.get('/', function(req, res){
  res.render('index', {
    title: 'Testing title', message: 'Testing message'
  });
});

module.exports = router;
