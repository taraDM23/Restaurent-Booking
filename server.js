var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3030;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//=====Code==================

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
  console.log("test")
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});



