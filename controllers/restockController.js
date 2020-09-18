const router = require("express").Router();

const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

router.get("/restock", isAuthenticated, (req, res) => {
  console.log(db.User);
  db.User.findAll().then(data => {
    res.render("restock", { data: data });
  });
});

router.post("/restock", isAuthenticated, (req, res) => {
  db.InventoryItem.findAll().then(data => {
    res.render("restock", { data: data });
  });
});

router.put("/restock", isAuthenticated, (req, res) => {
  db.InventoryItem.findAll().then(data => {
    res.render("restock", { data: data });
  });
});

module.exports = router;
