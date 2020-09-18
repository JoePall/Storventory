const router = require("express").Router();

const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

router.post("/inventory-setup", isAuthenticated, (req, res) => {
  db.InventoryItem.findAll().then(data => {
    res.render("index", data);
  });
});

module.exports = router;
