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
app.use(bodyParser.text({ type: 'text/html' }))
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Routes
// =============================================================

htmlRoutes.home(app);
htmlRoutes.survey(app);

apiRoutes.json(app, friends)
apiRoutes.post(app, friends)

// Starts the server to begin listening
// =============================================================
app.listen(app.get('port'), function() {
  console.log("App listening on PORT " + app.get('port'));
});