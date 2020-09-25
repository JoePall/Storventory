module.exports = function(app) {
  const isAuthenticated = require("../config/middleware/isAuthenticated");
  const db = require("../models");

  app.get("/inventory/:id", isAuthenticated, (req, res) => {
    db.InventoryItem.findAll({ where: { restaurantid: req.params.id } }).then(
      data => {
        res.render("/dashboard", { items: data.map(x => x.dataValues) });
      }
    );
  });

  app.get("/dashboard/:id", isAuthenticated, (req, res) => {
    db.InventoryItem.findAll({ where: { restaurantid: req.params.id } }).then(
      data => {
        res.render("/dashboard", { items: data.map(x => x.dataValues) });
      }
    );
  });

  app.post("/api/inventory/:id", isAuthenticated, (req, res) => {
    db.Restaurant.create({
      name: req.body.name,
      quantity: req.body.quantity,
      stockAmount: req.body.stockAmount,
      restaurantid: req.params,
      stockNumber: req.body.stockNumber
    }).then(() => {
      db.inventoryItem
        .findAll({ where: { restaurantid: req.body.id } })
        .then(data => {
          res.render("/dashboard", { items: data.map(x => x.dataValues) });
        });
    });
  });

  app.put("/api/inventory/:id", isAuthenticated, (req, res) => {
    db.InventoryItem.updateOne({
      quantity: req.body.quantity,
      stockAmount: req.body.stockAmount,
      where: { id: req.params.id }
    }).then(() => {
      db.inventoryItem
        .findAll({ where: { restaurantid: req.params.id } })
        .then(data => {
          res.render("/dashboard", { items: data.map(x => x.dataValues) });
        });
    });
  });
};
