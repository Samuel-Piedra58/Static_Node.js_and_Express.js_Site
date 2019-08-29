const express = require("express");
const pug = require("pug");
const routes = require("./routes/index.js");
const project = require("./routes/project.js");

const app = express();

// CONFIG STATIC SERVER //////////////////////////////
app.use("/static", express.static("public"));

// CONFIG TEMPLATING ENGINE //////////////////////////////
app.set("views", __dirname + "/views");
app.set("view engine", "pug");

// CONFIG ROUES //////////////////////////////
app.use("/", routes);
app.use("/projects", project);
app.use("/project", project);

// FORCE 404 ERROR //////////////////////////////
app.use(function(req, res, next) {
  const error = new Error("Page Not Found");
  error.statusCode = 404;
  next(error);
});

// ERROR HANDLER MIDDLEWARE //////////////////////////////
app.use(function(err, req, res, next) {
  // log error header to the console
  console.log("****************  ERROR  ****************");

  // Check if statusCode was set in 404 or if it can be set to 500
  if (err.statusCode === undefined) {
    err.statusCode = 500;
  }

  // log error message to console
  console.error(`${err.statusCode}: ${err.message}`);
  console.error(err.stack);

  if (err.statusCode !== 404) {
    err.message = "Internal Server Error";
  }

  // render error page with statuscode
  res.status(err.statusCode).render("error", { err });
});

// START SERVER //////////////////////////////
app.listen(3000, function() {
  console.log("Starting server on localhost:3000");
});

// TODOS

// -- Improve Git hub repos readme, lol they suck
// -- edit about me page
// -- edit side bar intro
// -- create feature to add style and interactivity when a user hover's over the project tile
// -- improve project descriptions
