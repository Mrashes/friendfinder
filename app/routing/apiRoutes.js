let friends = require('../data/friends.js');
let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let app = express();

let json = app.get("/api/friends", function(req, res) {
    //dispay JSON
    res.render(friends)
  return res.JSON(friends);
});

let post = app.post("/api/friends", function(req, res) {
    //  * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
  let newuser = req.body;

  console.log(newUser);

  friends.push(newUser);

  res.json(friends);
});

module.exports = json, post;