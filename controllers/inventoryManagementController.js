// include express and all models
module.exports = function(app) {
  const isAuthenticated = require("../config/middleware/isAuthenticated");
  const db = require("../models");

  // route to see all items in inventory
  app.get("/inventoryItem/item", isAuthenticated, (req, res) => {
    db.inventoryItem.findAll().then(data => {
      res.render("item", { data: data });
    });
  });

  // route for add inventory item
  app.post("/inventoryItem/create", isAuthenticated, (req, res) => {
    db.Restaurant.insertOne({
      quantity: req.body.quantity,
      stockAmount: req.body.stockAmount,
      stockNumber: req.body.stockNumber
    }).then(data => {
      res.render("create", { data: data });
    });
  });

  // route to update inventory item
  app.put("/inventoryItem/update", isAuthenticated, (req, res) => {
    db.Restaurant.updateOne({
      quantity: req.body.quantity,
      stockAmount: req.body.stockAmount,
      stockNumber: req.body.stockNumber,
      where: { id: req.body.id }
    }).then(data => {
      res.render("create", { data: data });
    });
  });
};
