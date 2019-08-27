const express = require("express");
const router = express.Router();
const { projects } = require("../data.json");

// CONFIG ROUTES
router.get("/", function(req, res) {
  const randomProjectId = Math.floor(Math.random() * projects.length);
  const randomProjectRoute = `/projects/${randomProjectId}`;
  res.redirect(randomProjectRoute);
});

router.get("/:id", function(req, res) {
  // ADD ADDITIONAL CHECK FOR VALID ":id" PARAMETER
  // --- if its undefined?
  // --- does an item in the array equal that parameter?
  const { id } = req.params;
  const displayProject = projects[id];
  res.render("project", { displayProject });
});

module.exports = router;
