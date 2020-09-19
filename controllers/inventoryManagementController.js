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
  app.post("/create", isAuthenticated, (req, res) => {
    db.Restaurant.insertOne(req.body.name, () => {
      res.render("create", { data: data });
    });
  });

  // route to update restaurant
  app.post("/update", isAuthenticated, (req, res) => {
    db.Restaurant.updateOne(req.params.id, () => {
      res.render("update", { data: data });
    });
  });
};
