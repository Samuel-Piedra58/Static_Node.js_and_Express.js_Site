const express = require("express");
const router = express.Router();
const { projects } = require("../data.json");

// CONFIG ROUTES
router.get("/:id", function(req, res) {
  const { id } = req.params;
  const displayProject = projects[id];
  res.render("project", { displayProject });
});

module.exports = router;
