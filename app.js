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

// FORCE 404 ERROR //////////////////////////////
app.use(function(req, res, next) {
  const error = new Error("Page Not Found");
  error.statusCode = 404;
  next(error);
});

// ERROR HANDLER MIDDLEWARE //////////////////////////////
app.use(function(err, req, res, next) {
  console.error(`${err.statusCode}: ${err.message}`);
  console.error(`Request URL: ${req.headers.host + req.originalUrl}`);
  if (err.statusCode === undefined) {
    err.statusCode = 500;
    err.message = "Internal Server Error";
  }
  res.status(err.statusCode).render("error", { err });
});

// START SERVER //////////////////////////////
app.listen(3000, function() {
  console.log("Starting server on localhost:3000");
});

// TODOS

// -- Error Handling (404 / 500)
// -- Finish Git Hub images
//   -- Resize new images (1000 x 700)
// -- Improve Git hub repos readme, lol they suck
// -- get pictures of me :)
