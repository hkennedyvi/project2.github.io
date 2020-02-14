var db = require("../models");

module.exports = function(app) {

  // GET route for getting all of the players
  app.get("/api/starred", function(req, res) {
    db.Player.findAll({})
      .then(function(dbPlayer) {
        res.json(dbPlayer);
        console.log(dbPlayer);
      });
  });

  // POST route for saving a new player
  app.post("/api/saveplayer", function(req, res) {
    console.log(req.body);

    // const starredPlayerId = req.body.api_id;

    // if(starredPlayerId === db.Player.api_id) {
    //   console.log("error");
    // }

    db.Player.create({
      name: req.body.name,
      api_id: req.body.api_id
    }).then(function(dbPlayer) {
      res.json(dbPlayer);
    });
  });
};