var router = require("express").Router();

var db = require("../models");

router.get("/restock", (req, res) => {
  db.InventoryItem.findAll().then(data => {
    res.render("index", { data: data });
  });
});

router.post("/restock", (req, res) => {
  db.InventoryItem.findAll().then(data => {
    res.render("index", { data: data });
  });
});

router.get("/restock", (req, res) => {
  db.InventoryItem.findAll().then(data => {
    res.render("index", { data: data });
  });
});

module.exports = router;
