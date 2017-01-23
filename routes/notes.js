'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.send('Im the home page');
});

module.exports = router;
//module.exports = function(app){

  //app.get('/', function(req, res){
  //  res.render('index', {
  //  });
  //});

//};
