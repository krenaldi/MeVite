// Requiring our models and passport as we've configured it
var db = require("../models");
module.exports = (app) => {
    app.get( "/contactz", (req, res) =>
      db.contacts.findAll().then( (result) => res.json(result) )
    );
  
    app.get( "/contactz/:contactName", (req, res) =>
      db.contacts.findBycontactName(req.params.id).then( (result) => res.json(result))
    );
  
    app.post("/contactz", (req, res) => 
      db.contacts.create({
        contactName: req.body.contactName, 
        contactEmail: req.body.contactEmail,
        contactPhone: req.body.contactPhone

      }).then(function(data) {
        console.log("cool");
        res.json(data);
      }).catch(function(err) {
        console.log(err);
        res.json(err);
      })
    );
  
    app.put( "/contactz/:id", (req, res) =>
      db.contacts.update({
        contactName: req.body.contactName,
        contactEmail: req.body.contactEmail,
        contactPhone: req.body.contactPhone
      },
      {
        where: {
          id: req.params.id
        }
      }).then( (result) => res.json(result) )
    );
  
    app.delete( "/contactz/:id", (req, res) =>
      db.contacts.destroy({
        where: {
          id: req.params.id
        }
      }).then( (result) => res.json(result) )
    );
  }
  