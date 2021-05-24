const path = require("path");
let db = require("knex")({
  client: "sqlite3",
  connection: { filename: path.join(__dirname, "../../db.sqlite") },
});

module.exports = db;
