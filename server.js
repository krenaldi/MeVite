
// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
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

//Middleware to process request
//==============================================================
app.use(bodyParser.urlencoded({extended: false}));

// express-session
// We need to use sessions to keep track of our user's login status
//=============================================================
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// //we are doing a GET to test if our server is working fine
// //=============================================================
// app.get('/', function(req, res) {    
// 	res.send('./public/home.html');
// });
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Routes
// Requiring our routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
  });
