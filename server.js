var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3030;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//==========Routes==================

app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
  console.log("test")
});

app.get("/book", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
  console.log("test2")
});

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
  console.log("test3")
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});



