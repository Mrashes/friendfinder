let path = require("path");

let htmlRoutes = {
  survey : function(app) {
    app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  })},

  home : function(app) {
    app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  })},
}

module.exports = htmlRoutes