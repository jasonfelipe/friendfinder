// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");

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

//Makes sure our port is listening and the server is started
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});