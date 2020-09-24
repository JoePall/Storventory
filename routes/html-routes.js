// const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

module.exports = function(app) {
  app.get("/", (req, res) => {
    if (req.user) {
      db.Restaurant.findAll({ where: { userid: req.user.id } }).then(data => {
        res.render("restaurants", { restaurants: data.map(x => x.dataValues) });
      });
    } else {
      res.render("signup");
    }
  });

  app.get("/login", (req, res) => {
    if (req.user) {
      db.Restaurant.findAll({ where: { userid: req.user.id } }).then(data => {
        res.render("restaurants", { restaurants: data.map(x => x.dataValues) });
      });
    } else {
      res.render("login");
    }
  });

  app.get("/dashboard", (req, res) => {
    if (req.user) {
      db.Restaurant.findAll({ where: { userid: req.user.id } }).then(data => {
        res.render("restaurants", { restaurants: data.map(x => x.dataValues) });
      });
    } else {
      res.render("signup");
    }
  });
};
