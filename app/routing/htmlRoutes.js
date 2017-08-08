let friends = require('../data/friends.js');
let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let app = express();

app.get("/survey", function(req, res) {
  res.render(path.join(__dirname, "./app/public/survey.html"));
});

app.get("/", function(req, res) {
  res.render(path.join(__dirname, "./app/public/home.html"));
});