const router = require("express").Router();

const db = require("../models");

router.get("/restock", (req, res) => {
  console.log(db.User);
  db.User.findAll().then(data => {
    res.render("restock", { data: data });
  });
});

router.post("/restock", (req, res) => {
  db.InventoryItem.findAll().then(data => {
    res.render("restock", { data: data });
  });
});

router.put("/restock", (req, res) => {
  db.InventoryItem.findAll().then(data => {
    res.render("restock", { data: data });
  });
});

module.exports = router;
