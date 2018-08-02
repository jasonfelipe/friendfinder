// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Requires our API Route
require("./app/routing/apiRoutes.js")(app);

//Requires our HTML Routes
require("./app/routing/htmlRoutes.js")(app);

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

//Makes sure our port is listening
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});