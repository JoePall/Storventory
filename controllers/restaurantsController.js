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
  app.post("/api/restaurant", isAuthenticated, (req, res) => {
    if (req.user) {
      db.Restaurant.create({
        name: req.body.name,
        location: req.body.location,
        userid: req.user.id
      })
        .then(() => {
          res.status(200);
          res.send({ message: "restaurant created" });
        })
        .catch(err => {
          res.status(401).json(err);
        });
    } else {
      res.render("login");
    }
  });

  // route to update restaurant
  app.put("/api/restaurant", isAuthenticated, (req, res) => {
    if (req.user) {
      db.Restaurant.update({
        name: req.body.name,
        location: req.body.location,
        where: { id: req.body.id }
      })
        .then(() => {
          res.status(200);
          res.send({ message: "restaurant updated" });
        })
        .catch(err => {
          res.status(401).json(err);
        });
    } else {
      res.render("login");
    }
  });

  // route to delete restaurant
  app.delete("/api/restaurant/:id", isAuthenticated, (req, res) => {
    if (req.user) {
      db.Restaurant.destroy({
        where: { id: req.params.id }
      })
        .then(() => {
          res.status(200);
          res.send({ message: "restaurant deleted" });
        })
        .catch(err => {
          res.status(401).json(err);
        });
    } else {
      res.render("login");
    }
  });
};
