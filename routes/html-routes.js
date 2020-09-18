const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    if (req.user) {
      res.render("dashboard");
    }
    res.render("signup");
  });

  app.get("/login", (req, res) => {
    if (req.user) {
      res.render("dashboard");
    }
    res.render("login");
  });

  app.get("/dashboard", isAuthenticated, (req, res) => {
    res.render("dashboard");
  });
  app.get("/restaurant", isAuthenticated, (req, res) => {
    res.render("restaurant");
  });
  app.get("/restock", isAuthenticated, (req, res) => {
    res.render("restock");
  });
};
