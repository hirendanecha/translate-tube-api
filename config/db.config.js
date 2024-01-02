"use strict";

const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "37.27.27.202",
  user: "root",
  password: "JYq1Nyr2l7Cf",
  database: "translate-tube",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Database connected");
});

function keepAlive() {
  db.query("SELECT 1", (err) => {
    if (err) throw err;
  });
}
setInterval(keepAlive, 30000);

module.exports = db;
