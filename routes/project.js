const express = require("express");
const router = express.Router();
const { projects } = require("../data.json");

// CONFIG ROUTES
// render a random project if the user navigates to "/projects"
router.get("/", function(req, res) {
  const randomProjectId = Math.floor(Math.random() * projects.length);
  const randomProjectRoute = `/projects/${randomProjectId}`;
  res.redirect(randomProjectRoute);
});

// render the requested project from the project id
router.get("/:id", function(req, res, next) {
  const { id } = req.params;
  if (isNaN(id) || id === undefined) {
    // if requested project id is not a number or is undefined then call next()
    return next();
  } else if (id < 0 || id >= projects.length) {
    // if requested project is not an available project then call next()
    return next();
  }

  const displayProject = projects[id];
  res.render("project", { displayProject });
});

module.exports = router;
