const peopleArray = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(peopleArray);
      });

      app.post("/api/friends", function(req, res) {
          res.json(true);
      });

};