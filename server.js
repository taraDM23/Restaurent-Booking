var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3030;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//==========Reservation array ===============

var newBooking = [
  {
    name: "yoda",
    phoneNumber: 43957369867 ,
    email: "Jedi@Master",
    uniqueID: 900,
    
  }]



//==========Routes==================

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
  
});

app.get("/book", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
 
});

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
 
});

//====== view Individual booking =============
app.get("/book/:uniqueID", function(req, res) {
  var currentBookings = req.params.uniqueID;

  console.log(currentBookings);

  for (var i = 0; i < uniqueID.length; i++) {
    if (currentBookings === uniqueID[i].routeName) {
      return res.json(uniqueID[i]);
    }
  }

  return res.json(false);
});

//====== Make reservation =============

app.post("/book", function(req, res) {

  const newReservation = req.body;
  console.log(newReservation);
  newBooking.push(newReservation);
  res.json(newReservation);
});

// ====================== Starts the server =======================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});



