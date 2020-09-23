// include express and all models
module.exports = function(app) {
  const isAuthenticated = require("../config/middleware/isAuthenticated");
  const db = require("../models");

  // route to see all restaurants
  app.get("/", (req, res) => {
    if (req.user) {
      db.Restaurant.findAll({ where: { userid: req.user.id } }).then(data => {
        res.render("restaurants", { restaurants: data.map(x => x.dataValues) });
      });
    } else {
      res.render("login");
    }
  });

  // route for add restaurant
  app.post("/restaurant/create", isAuthenticated, (req, res) => {
    if (req.user) {
      db.Restaurant.create({
        name: req.body.name,
        location: req.body.location
      }).then(window.location.replace("/"));
    } else {
      res.render("login");
    }
  });

  // route to update restaurant
  app.put("/restaurant/update", isAuthenticated, (req, res) => {
    if (req.user) {
      db.Restaurant.update({
        name: req.body.name,
        location: req.body.location,
        where: { id: req.body.id }
      }).then(window.location.replace("/"));
    } else {
      res.render("login");
    }
  });
};
