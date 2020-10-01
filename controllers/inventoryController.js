module.exports = function(app) {
  const isAuthenticated = require("../config/middleware/isAuthenticated");
  const db = require("../models");

  app.get("/inventory", isAuthenticated, (req, res) => {
    db.InventoryItem.findAll({ where: { restaurantid: req.body.id } }).then(
      data => {
        res.render("dashboard", { items: data.map(x => x.dataValues) });
      }
    );
  });

  app.get("/dashboard/:id", isAuthenticated, (req, res) => {
    db.InventoryItem.findAll({ where: { restaurantid: req.params.id } }).then(
      data => {
        res.render("dashboard", {
          restaurantid: req.params.id,
          items: data.map(x => x.dataValues)
        });
      }
    );
  });

  app.post("/api/inventory", isAuthenticated, (req, res) => {
    db.InventoryItem.create({
      name: req.body.name,
      quantity: req.body.quantity,
      stockAmount: req.body.stockAmount,
      restaurantid: req.body.restaurantid,
      stockNumber: req.body.stockNumber
    }).then(() => {
      db.InventoryItem.findAll({
        where: { restaurantid: req.body.restaurantid }
      }).then(data => {
        res.render("dashboard", { items: data.map(x => x.dataValues) });
      });
    });
  });

  app.put("/api/inventory", isAuthenticated, (req, res) => {
    db.InventoryItem.updateOne({
      name: req.body.name,
      quantity: req.body.quantity,
      stockAmount: req.body.stockAmount,
      restaurantid: req.body.restaurantid,
      stockNumber: req.body.stockNumber,
      id: req.body.id,
      where: { id: req.body.id }
    }).then(() => {
      db.InventoryItem.findAll({ where: { restaurantid: req.body.id } }).then(
        data => {
          res.render("/dashboard", { items: data.map(x => x.dataValues) });
        }
      );
    });
  });

  // route to delete inventoryitem
  app.delete("/api/inventory/:id", isAuthenticated, (req, res) => {
    if (req.user) {
      db.InventoryItem.destroy({
        where: { id: req.params.id }
      })
        .then(() => {
          res.status(200);
          res.send({ message: "inventoryItem deleted" });
        })
        .catch(err => {
          res.status(401).json(err);
        });
    } else {
      res.render("login");
    }
  });
};
