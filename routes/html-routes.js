// const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

module.exports = function(app) {
  app.get("/", (req, res) => {
    if (req.user) {
      db.Restaurant.findAll({ where: { userid: req.user.id } }).then(data => {
        res.render("restaurant", data);
      });
    } else {
      res.render("signup");	
    }
  });

  app.get("/login", (req, res) => {
    if (req.user) {
      db.Restaurant.findAll({ where: { id: req.user.userid } }).then(data => {
        res.render("restaurant", data);
      });
    } else {
      res.render("login");
    }
  });

  app.get("/dashboard", (req, res) => {
    res.render("dashboard");
  });
  app.get("/restaurant", (req, res) => {
    if (req.user) {
      db.Restaurant.findAll({ where: { userid: req.user.id } }).then(data => {
        res.render("restaurant", data);
      });
    } else {
      res.render("signup");	
    }
  });
  app.get("/inventory", (req, res) => {
    res.render("inventory");
  });
};
