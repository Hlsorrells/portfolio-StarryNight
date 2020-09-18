////////////////////////////////////////////////////////
// DEPENDENCIES
// Series of npm packages that give our server useful functionality
////////////////////////////////////////////////////////
const express = require("express");
const exphbs = require("express-handlebars");

/////////////////////////////////////////////////////////
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
/////////////////////////////////////////////////////////

// Create express app instance
const app = express();
// Set the port of application
const PORT = process.env.PORT || 8080;

/////////////////////////////////////////////////////////
// MIDDLEWARE CONFIGURATION
// Communication between front-end and back-end applications
/////////////////////////////////////////////////////////

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

/////////////////////////////////////////////////////////
// ROUTER
/////////////////////////////////////////////////////////

app.get("/", (req, res) => {
  res.render("index");
});

//////////////////////////////////////////////////////////
// LISTENER
//////////////////////////////////////////////////////////

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
