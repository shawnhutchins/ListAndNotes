'use strict';
var express = require('express');
var router = express.Router();

//middleware


//routes
router.get('/', function(req, res){
  res.send('show notes here');
});

module.exports = router;
