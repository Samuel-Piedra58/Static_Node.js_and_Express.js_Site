const express = require("express");
const pug = require("pug");

const app = express();

// CONFIG STATIC SERVER
app.use("/static", express.static("public"));

// CONFIG TEMPLATING ENGINE
app.set("views", __dirname + "/views");
app.set("view engine", "pug");

// CONFIG ROUTES
app.get("/", function(req, res) {
  res.render("index");
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.get("/project", function(req, res) {
  res.render("project");
});

app.listen(3000, function() {
  console.log("Starting server on localhost:3000");
});
