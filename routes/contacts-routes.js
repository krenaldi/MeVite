// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = (app, db) => {
    app.get( "/contacts", (req, res) =>
      db.contacts.findAll().then( (result) => res.json(result) )
    );
  
    app.get( "/contacts/:userName", (req, res) =>
      db.contacts.findByUserName(req.params.userName).then( (result) => res.json(result))
    );
  
    app.post("/contacts", (req, res) => 
      db.contacts.create({
        userName: req.body.userName, ///// 
        email: req.body.email,
        phoneNumber: req.body.phoneNumber
      }).then( (result) => res.json(result) )
    );
  
    app.put( "/contacts/:userName", (req, res) =>
      db.contacts.update({
        userName: req.body.userName,
        name: req.body.name,
        email: req.body.email
      },
      {
        where: {
          userName: req.body.userName
        }
      }).then( (result) => res.json(result) )
    );
  
    app.delete( "/contacts/:userName", (req, res) =>
      db.contacts.destroy({
        where: {
          userName: req.body.userName
        }
      }).then( (result) => res.json(result) )
    );
  }
  