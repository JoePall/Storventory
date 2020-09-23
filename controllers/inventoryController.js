module.exports = function(app) {
  const isAuthenticated = require("../config/middleware/isAuthenticated");
  const db = require("../models");

  app.get("/inventory", isAuthenticated, (req, res) => {
    db.inventoryItem.findAll().then(data => {
      res.render("item", { data: data });
    });
  });

  app.post("/api/inventory", isAuthenticated, (req, res) => {
    db.Restaurant.insertOne({
      quantity: req.body.quantity,
      stockAmount: req.body.stockAmount,
      stockNumber: req.body.stockNumber
    }).then(data => {
      res.render("create", { data: data });
    });
  });

  app.put("/api/inventory", isAuthenticated, (req, res) => {
    db.Restaurant.updateOne({
      name: req.body.name,
      quantity: req.body.quantity,
      stockAmount: req.body.stockAmount,
      stockNumber: req.body.stockNumber,
      where: { id: req.body.id }
    }).then(() => {
      db.inventoryItem
        .findAll({ where: { restaurantid: req.body.id } })
        .then(data => {
          res.render("/inventory", { items: data.map(x => x.dataValues) });
        });
    });
  });

  app.post("/inventory-setup", isAuthenticated, (req, res) => {
    db.InventoryItem.findAll().then(data => {
      res.render("index", data);
    });
  });
};
