'use strict'

var express = require('express');
var path = require('path');

var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 8080;
console.log(port)
var publicPath = path.resolve(__dirname, '..');

app.use(express.static(publicPath));

app.use('/', (req, res, send) => {
  res.sendFile(path.resolve(__dirname, '..', 'index.html'))
})

app.listen(port, function () {
 console.log('Server running on port ' + port);
});
