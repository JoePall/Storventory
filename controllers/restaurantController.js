// include express and all models
const express = require("express");
const router = express.Router();
const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

// route to see all restaurants
router.get("/restaurant", isAuthenticated, (req, res) => {
  db.Restaurant.findAll().then(data => {
    res.render("restaurant", { data: data });
  });
});

// route for add restaurant
router.post("/create", isAuthenticated, (req, res) => {
  db.Restaurant.insertOne(req.body.name, () => {
    res.render("create", { data: data });
  });
});

// route to update restaurant
router.post("/update", isAuthenticated, (req, res) => {
  db.Restaurant.updateOne(req.params.id, () => {
    res.render("update", { data: data });
  });
});

module.exports = router;
