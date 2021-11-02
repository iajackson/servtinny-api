const express = require("express");

// Main Router
const routes = require('./routes');

const app = express();

// Server middleware
app.use((req, res, next) => {
  console.log(`Request from IP ${req.ip} requesting ${req.url} with HTTP Method ${req.method}`);
  next();
});

// Main routes
app.use('/', routes);

app.listen(8080, () => {
 console.log("Server running on port 8080");
});
