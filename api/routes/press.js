module.exports = app => {
  const press = require("../controllers/press.js");
  app.post("/press/add", press.create);
}