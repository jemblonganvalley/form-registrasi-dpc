const express = require("express");
const home = express.Router();

home.get("/", (req, res) => {
  res.render("main");
});

module.exports = home;
