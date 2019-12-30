var express = require('express');
var router = express.Router();
var path = require('path');
var friends = require("../data/friends.js");

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

router.get('/survey', function(req, res, next) {
  res.sendFile(path.join(__dirname, "../app/public/survey.html"));
});

router.get('/home', function(req, res, next) {
  res.sendFile(path.join(__dirname, "../app/public/home.html"));
});

module.exports = router;