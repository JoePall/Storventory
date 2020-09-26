module.exports = function(app) {
  const isAuthenticated = require("../config/middleware/isAuthenticated");
  const db = require("../models");

  app.get("/shop/:id", isAuthenticated, (req, res) => {
    console.log("in shop/:id");
    db.InventoryItem.findAll({ where: { restaurantid: req.params.id } }).then(
      data => {
        res.render("shop", { items: data.map(x => x.dataValues) });
        // console.log("restaurantid = " + items.restaurantid);
      }
    );
  });
};
