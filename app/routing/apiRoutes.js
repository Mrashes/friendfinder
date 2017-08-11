let friends = require('../data/friends.js');
let path = require("path");

let apiRoutes = {
  json : function(app, friends) {
    app.get("/api/friends", function(req, res) {
        //dispay JSON
        // res.render(friends)
      return res.json(friends);
    });
  },
  post: function(app, friends) {
    app.post("/api/friends", function(req, res) {
      //  * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
      let newuser = req.body;

      console.log(newUser);

      friends.push(newUser);

      res.json(friends);
    });
  },
}

module.exports = apiRoutes;