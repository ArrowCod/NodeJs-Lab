/* This code creates a simple Express server with endpoints for managing information about John's kidneys.
  It includes endpoints for retrieving kidney information (GET /), adding a new kidney status (POST /),
  marking all kidneys as healthy (PUT /), and removing unhealthy kidneys (DELETE /).
  Each endpoint handles its respective operation and sends a JSON response.

  => its a HTTP server on localhost without a database we consider a idol senario of a hospetel and perfoam some opration on server and chaeak output on "Postman".
*/


const express = require("express");
const app = express();
app.use(express.json());

// Sample user data with a name and an array of kidneys
const user = [{
  name: "John",
  kidneys: [{
    healthy: false
  }]
}];

// Endpoint to get information about John's kidneys
app.get("/", function(req, res){
  const johnKidneys = user[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numberOfHealtyKidneys = 0;

  // Counting healthy kidneys
  for (let i = 0; i < johnKidneys; i++){ // Typo: should be `johnKidneys.length` instead of `johnKidneys`
    if(johnKidneys[i].healthy){
      numberOfHealtyKidneys = numberOfHealtyKidneys + 1;
    }
  }

  // Calculating unhealthy kidneys
  const numberOfUnhealtyKidneys = numberOfKidneys - numberOfHealtyKidneys;

  // Sending JSON response with kidney information
  res.json({
    numberOfKidneys,
    numberOfHealtyKidneys,
    numberOfUnhealtyKidneys
  });
});

// Endpoint to add a new kidney status to John's kidneys
app.post("/", function(req, res){
  const isHealthy = req.body.isHealthy;

  // Adding new kidney status to the kidneys array
  user[0].kidneys.push({
    healthy: isHealthy
  });

  // Sending confirmation message
  res.json({
    msg: "Done!"
  });
});

// Endpoint to mark all of John's kidneys as healthy
app.put("/", function(req, res){
  for(let i = 0; i < user[0].kidneys.length; i++){
    user[0].kidneys[i].healthy = true;
  }

  // Sending empty response as confirmation
  res.json({});
});

// Endpoint to remove unhealthy kidneys from John's kidneys
app.delete("/", function(req, res){
  const newKidneys = [];

  // Filtering out unhealthy kidneys
  for(let i = 0; i < user[0].kidneys.length; i++){
    if(user[0].kidneys[i].healthy){
      newKidneys.push({
        healthy: true
      });
    }
  }

  // Updating kidneys array with healthy kidneys only
  user[0].kidneys = newKidneys;

  // Sending confirmation message
  res.json({
    msg: "done"
  });
});

// Server listening on port 3000
app.listen(3000);
