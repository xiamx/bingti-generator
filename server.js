var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: __dirname });
});

app.get('/bundle.js', function (req, res) {
  res.sendFile('bundle.js', { root: __dirname });
});

app.listen(8080, function () {
  console.log('Listening on port 8080!');
});