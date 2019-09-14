// Dependencies
// =============================================================
var express = require('express');
var session = require('express-session');
var path = require('path');
// var router = express.Router();
// Requiring passport as we've configured it
// =============================================================
var passport = require("./config/passport");
//Import the models folder
// =============================================================
var db = require("./models");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
// Static directory to be served
app.use(express.static('./public'));
// Sets up the Express app to handle data parsing
//=============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// express-session
// We need to use sessions to keep track of our user's login status
//=============================================================
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
// Routes
// Requiring our routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function () {
 app.listen(PORT, function () {
   console.log("Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
 });
});