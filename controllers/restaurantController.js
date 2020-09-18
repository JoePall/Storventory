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

// route to update burger ad devoured
router.post("/burger/eat/:id", (req, res) => {
  burger.updateOne(req.params.id, () => {
    res.redirect("/index");
  });
});

module.exports = router;
