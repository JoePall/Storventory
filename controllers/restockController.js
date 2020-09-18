module.exports = function(app) {
  const isAuthenticated = require("../config/middleware/isAuthenticated");
  const db = require("../models");

  app.get("/restock", isAuthenticated, (req, res) => {
    db.User.findAll().then(data => {
      res.render("restock", { data: data });
    });
  });

  // app.post("/api/inventoryItem", isAuthenticated, (req, res) => {
  //   // db.InventoryItem
  // });

  app.put("/restock", isAuthenticated, (req, res) => {
    db.InventoryItem.findAll().then(data => {
      res.render("restock", { data: data });
    });
  });
};
