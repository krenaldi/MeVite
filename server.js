
// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var router = express.Router();


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
//=============================================================
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// Routes
// =============================================================
require("./routes/api_routes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
