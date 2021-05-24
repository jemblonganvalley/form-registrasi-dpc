const express = require("express");
const frm = express.Router();

frm.get("/", (req, res) => {
  res.render("main");
});

module.exports = frm;
