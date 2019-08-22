const express = require("express");
const router = express.Router();
const { projects } = require("../data.json");

// CONFIG ROUTES
router.get("/", function(req, res) {
  res.render("index", { projects });
});

router.get("/about", function(req, res) {
  res.render("about");
});

module.exports = router;
