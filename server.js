let friends = require('./app/data/friends.js');

let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let apiRoutes = require("./app/routing/apiRoutes.js")
let htmlRoutes = require("./app/routing/htmlRoutes.js")

// Sets up the Express App
// =============================================================
let app = express();

app.set('port', (process.env.PORT || 3000));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Routes
// =============================================================

// let json = app.get("/api/friends", function(req, res) {
//   return res.JSON(friends);
// });


// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(app.get('port'), function() {
  console.log("App listening on PORT " + app.get('port'));
});