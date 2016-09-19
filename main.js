'use strict'

const express = require('express');
const app     = express();
const port    = 8080;

const Server  = require('./server/index.js');

app.get('/', function(req, res){
  res.send('Hello World');
});

app.listen(3000);
