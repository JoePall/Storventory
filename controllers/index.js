"use strict";

const fs = require("fs");
const path = require("path");
const basename = path.basename(module.filename);
const controllers = {};

module.exports = function(app) {
  fs.readdirSync(__dirname)
    .filter(file => {
      return (
        file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
      );
    })
    .forEach(file => {
      const fileName = file.slice(0, -3);
      require("./" + fileName)(app);
    });

  module.exports = app;
};
