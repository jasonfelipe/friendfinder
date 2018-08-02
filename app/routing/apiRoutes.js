//Data that is required
const peopleArray = require("../data/friends.js");

module.exports = function (app) {
    //Shows the table of People
    app.get("/api/friends", function (req, res) {
        res.json(peopleArray);
    });


    //Person Search in API
    app.get("/api/friends/:person", function (req, res) {
        var chosen = req.params.person;
        console.log(chosen);
        for (var i = 0; i < friends.length; i++) {
            if (chosen === friends[i].routeName) {
                return res.json(friends[i]);
            }
        }
        return res.json(false);
    });

};