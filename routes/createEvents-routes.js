// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = (app, db) => {
    app.get( "/createEvent", (req, res) =>
      db.createEvent.findAll().then( (result) => res.json(result) )
    );
  
    app.get( "/createEvent/:title", (req, res) =>
      db.createEvent.findByTitle(req.params.id).then( (result) => res.json(result))
    );
  
    app.post("/createEvent", (req, res) => 
      db.createEvent.create({
        title: req.body.title,
        date: req.body.date,
        time: req.body.time,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        country: req.body.country

      }).then( (result) => res.json(result) )
    );
  
    app.put( "/createEvent/:title", (req, res) =>
      db.createEvent.update({
        title: req.body.title,
        date: req.body.date,
        time: req.body.time,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        country: req.body.country
      },
      {
        where: {
            title: req.body.title
        }
      }).then( (result) => res.json(result) )
    );
  
    app.delete( "/createEvent/:title", (req, res) =>
      db.createEvent.destroy({
        where: {
            title: req.body.title
        }
      }).then( (result) => res.json(result) )
    );
  }
  