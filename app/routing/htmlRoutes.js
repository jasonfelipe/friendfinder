//NEEDS PATH TO WORK!
const path = require("path");

//Home page
module.exports = function (app) {

    //Path to Home
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
   
    //Path to Survey
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    
    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}