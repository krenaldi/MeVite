
// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
<<<<<<< HEAD
var router = express.Router();
// var env = require('dotenv').config({path: __dirname + '/.env'});
var passport   = require('passport');
var LocalStrategy = require('passport-local').Strategy;

=======
// var router = express.Router();
>>>>>>> master

// Requiring passport as we've configured it
// =============================================================
var passportSetup = require("./config/passport.js");

//Import the models folder
// =============================================================
var db = require("./models");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// set view engine
app.set('view engine', 'ejs');

// Static directory to be served
app.use(express.static('./public'));

// Sets up the Express app to handle data parsing
//=============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Middleware to process request
//==============================================================
//For BodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// For Passport
//==============================================================
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// import and add passport as an argument
//=============================================================
var authRoute = require('./routes/auth.js')(app,passport);

passport.use(new LocalStrategy(function(username, password, done) {
    // database.signin(username, password, done);
    if (username === 'admin' && password === 'admin') {
      console.log('Signin');
      done(null, { username: username });
    } else {
      done(null, false);
    }
  }));
  
  app.post('/signin', passport.authenticate('local', {
    successRedirect: '/accessed',
    failureRedirect: '/access'
  }));

  passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });


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


//=============================================================
app.get('/', function(req, res) {
 
    res.send('Welcome to Passport with Sequelize');
 
});
 
//Models
//=============================================================
var models = require("./models"); 

//load passport strategies
//=============================================================
require('./passport/passport.js')(passport, models.user);

// Routes
// Requiring our routes
// =============================================================
<<<<<<< HEAD
require("./routes/api_routes.js")(app);
var authRoute = require('./routes/auth.js')(app, passport);

//Sync Database
// =============================================================
models.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine')
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!")
});
=======
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
>>>>>>> master

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log('Server listening on: http://localhost:' + PORT);
    });
  });
