app.get("/api/friends", function(req, res) {
    //dispay JSON
  return res.JSON(friends);
});

app.post("/api/friends", function(req, res) {
    //  * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
  var newuser = req.body;

  console.log(newUser);

  friends.push(newUser);

  res.json(friends);
});