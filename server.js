const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./models");
const cors = require('cors')

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/backlogdb",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

//API routes here
app.get("/api", cors(), (req, res) => {
  db.Media.find({})
    .then(dbMedia => {
      res.json(dbMedia);
    })
    .catch(err => {
      res.json(err);
    });
});

app.post("/api/submit", cors(), ( { body }, res) => {
  db.Media.create(body)
    .then(dbMedia => {
      res.json(dbMedia);
    })
    .catch(err => {
      res.json(err);
    });
});

// Send every other request to the React app
// Define any API routes before this runs

//Temporarily commented out pending a proper build!
/*app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});*/

//Test page for API debugging
app.get("/apitest", (req, res) => {
  res.sendFile(path.join(__dirname, "./testing/testapi.html"));
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});


