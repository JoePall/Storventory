// include express and all models
module.exports = function(app) {
  const isAuthenticated = require("../config/middleware/isAuthenticated");
  const db = require("../models");

  // route to see all restaurants
  app.get("/restaurant", isAuthenticated, (req, res) => {
    db.Restaurant.findAll().then(data => {
      res.render("restaurant", { data: data });
    });
  });

  // route for add restaurant
  app.post("/restaurant/create", isAuthenticated, (req, res) => {
    db.Restaurant.insertOne({
      name: req.body.name,
      location: req.body.location
    }).then(data => {
      res.render("create", { data: data });
    });
  });

  // route to update restaurant
  app.put("/restaurant/update", isAuthenticated, (req, res) => {
    db.Restaurant.updateOne({
      name: req.body.name,
      location: req.body.location,
      where: { id: req.body.id }
    }).then(data => {
      res.render("create", { data: data });
    });
  });
};
