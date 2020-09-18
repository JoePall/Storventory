var router = require("express").Router();

var db = require("../models");

router.post("/inventory-setup", (req, res) => {
  db.inventoryItem
  res.render("index", {
    burgersOrderedByName: burgersOrderedByName,
    burgersOrderedByDevoured: burgersOrderedByDevoured
});
});

router.put("/api/burgers/", (req, res) => {
    let devoured = req.body.devoured++;
    let object = {
        id: req.body.id,
        devoured: devoured
    };
    burger.update(object, (err, data) => res.json(data));
});

module.exports = router;
