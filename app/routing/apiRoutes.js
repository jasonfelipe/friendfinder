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

app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    console.log(req.body);
    peopleArray.push(req.body);
});
};