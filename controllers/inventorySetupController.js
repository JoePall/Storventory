module.exports = function(app) {
  const isAuthenticated = require("../config/middleware/isAuthenticated");
  const db = require("../models");

  app.post("/inventory-setup", isAuthenticated, (req, res) => {
    db.InventoryItem.findAll().then(data => {
      res.render("index", data);
    });
  });
};
