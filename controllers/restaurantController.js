// include express and all models
const express = require("express");
const router = express.Router();
const db = require("../models");

// route for add restaurant
router.post("/restaurant/create", (req, res) => {
  db.insertOne(req.body.name, () => {
    res.redirect("/index");
  });
});

// route to update restaurant
router.post("/restaurant/update", (req, res) => {
  db.updateOne(req.params.id, () => {
    res.redirect("/index");
  });
});

module.exports = router;
