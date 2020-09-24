
const mongoose = require("mongoose");
const http = require("http");
const apijs = require("./routes/api");
const express = require ("express");
const app = express ();

app.use (apijs);

// Define a port to listen for incoming requests
const PORT = 8080;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {
  response.end("It Works!! Path Hit: " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
const server = http.createServer(handleRequest);

//Establish Mongoose connection
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/backlogdb",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});