const functions = require("firebase-functions");
const cors = require("cors");
const express = require("express");

/* Express with CORS */
const app2 = express();
app2.use(cors({ origin: true }));
app2.get("*", (request, response) => {
  response.send("Hello from Express on Firebase with CORS!");
});

const api2 = functions.https.onRequest(app2);

module.exports = {
  api2,
};
