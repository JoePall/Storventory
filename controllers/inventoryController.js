module.exports = function(app) {
  const isAuthenticated = require("../config/middleware/isAuthenticated");
  const db = require("../models");

  app.get("/inventory", isAuthenticated, (req, res) => {
    db.inventoryItem
      .findAll({ where: { restaurantid: req.body.id } })
      .then(data => {
        res.render("/dashboard", { items: data.map(x => x.dataValues) });
      });
  });

  app.get("/dashboard", isAuthenticated, (req, res) => {
    db.inventoryItem
      .findAll({ where: { restaurantid: req.body.id } })
      .then(data => {
        res.render("/dashboard", { items: data.map(x => x.dataValues) });
      });
  });

  app.post("/api/inventory", isAuthenticated, (req, res) => {
    db.Restaurant.create({
      name: req.body.name,
      quantity: req.body.quantity,
      stockAmount: req.body.stockAmount,
      restaurantid: req.body.restaurantid,
      stockNumber: req.body.stockNumber
    }).then(() => {
      db.inventoryItem
        .findAll({ where: { restaurantid: req.body.id } })
        .then(data => {
          res.render("/dashboard", { items: data.map(x => x.dataValues) });
        });
    });
  });

  app.put("/api/inventory", isAuthenticated, (req, res) => {
    db.Restaurant.updateOne({
      quantity: req.body.quantity,
      stockAmount: req.body.stockAmount,
      where: { id: req.body.id }
    }).then(() => {
      db.inventoryItem
        .findAll({ where: { restaurantid: req.body.id } })
        .then(data => {
          res.render("/dashboard", { items: data.map(x => x.dataValues) });
        });
    });
  });
};
