var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/detail', function(req, res) {
  res.send('Hello World! /detail');
});

app.listen(3000, function() {
  console.log('Server On!');
});