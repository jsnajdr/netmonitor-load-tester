"use strict";

var express = require('express');

var app = express();

app.use(function(req, res, next) {
  console.log("Got request:", req.method, req.originalUrl);
  next();
});

app.use('/', express.static("static"));

app.listen(5000);
