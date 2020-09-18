const router = require("express").Router();

const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

router.post("/inventory-setup", isAuthenticated, (req, res) => {
  db.inventoryItem;
  res.render("index", {
    burgersOrderedByName: burgersOrderedByName,
    burgersOrderedByDevoured: burgersOrderedByDevoured
  });
});

router.put("/api/burgers/", (req, res) => {
  const devoured = req.body.devoured++;
  const object = {
    id: req.body.id,
    devoured: devoured
  };
  burger.update(object, (err, data) => res.json(data));
});

module.exports = router;
