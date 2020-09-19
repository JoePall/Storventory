// const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

module.exports = function(app) {
  app.get("/", (req, res) => {
    if (req.user) {
      db.Restaurant.findAll({ where: { userid: req.user.id } }).then(data => {
        res.render("dashboard", data);
      });
    } else {
      res.render("signup");	
    }
  });

  app.get("/login", (req, res) => {
    if (req.user) {
      db.Restaurant.findAll({ where: { id: req.user.userid } }).then(data => {
        res.render("dashboard", data);
      });
    } else {
      res.render("login");
    }
  });

  app.get("/dashboard", (req, res) => {
    res.render("dashboard");
  });
  app.get("/restaurant", (req, res) => {
    res.render("restaurant");
  });
  app.get("/restock", (req, res) => {
    res.render("restock");
  });
};
