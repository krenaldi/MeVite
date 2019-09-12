// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var data = require("../models/index");

// Routes 
// =============================================================
module.exports = (router) => {

	router.get('/home', (req, res) => {
	if (req.session.loggedin) {
		res.send('Welcome back, ' + req.session.username + '!');
	} else {
       
        res.send('Please login to view this page!');
	}
	res.end();
});

// Login Auth
router.post('/auth', (req, res) =>{
	var username = req.body.username;
	var password = req.body.password;
	if (username && password) {
        connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', 
        [username, password], function(error, results, fields) {
			if (results.length > 0) {
				req.session.loggedin = true;
				req.session.username = username;
				res.redirect('/home');
			} else {
				res.send('Incorrect Username and/or Password!');
			}			
			res.end();
		});
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
 });

};