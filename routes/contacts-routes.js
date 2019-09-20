// Requiring our models and passport as we've configured it
var db = require("../models");
module.exports = (app) => {
    app.get( "/contacts", (req, res) =>
      db.contacts.findAll().then( (result) => res.json(result) )
    );
  
    app.get( "/contacts/:contactName", (req, res) =>
      db.contacts.findByContactName(req.params.contactName).then( (result) => res.json(result))
    );
  
    app.post("/contacts", (req, res) => 
      db.contacts.create({
        contactName: req.body.contactName, ///// 
        contactEmail: req.body.contactEmail,
        contactPhone: req.body.contactPhone
      }).then( (result) => res.send("/contacts") )
    );
  
    app.put( "/contacts/:contactName", (req, res) =>
      db.contacts.update({
        contactName: req.body.contactName,
        contactEmail: req.body.contactEmail,
        contactPhone: req.body.contactPhone
      },
      {
        where: {
          contactName: req.body.contactName
        }
      }).then( (result) => res.render("/contacts") )
    );
  
    app.delete( "/contacts/:contactName", (req, res) =>
      db.contacts.destroy({
        where: {
          contactName: req.body.contactName
        }
      }).then( (result) => res.json(result) )
    );
  }
  