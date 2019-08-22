const express = require("express");
const pug = require("pug");
const routes = require("./routes/index.js");
const project = require("./routes/project.js");

const app = express();

// CONFIG STATIC SERVER
app.use("/static", express.static("public"));

// CONFIG TEMPLATING ENGINE
app.set("views", __dirname + "/views");
app.set("view engine", "pug");

app.use("/", routes);
app.use("/project", project);

app.listen(3000, function() {
  console.log("Starting server on localhost:3000");
});

// TODOS

// -- Error Handling (404 / 500)
// -- Finish Git Hub images
//   -- Resize new images (1000 x 700)
// -- Improve Git hub repos readme, lol they suck
// -- get pictures of me :)
