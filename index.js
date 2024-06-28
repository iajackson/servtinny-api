var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('sslcert/selfsigned.key');
var certificate = fs.readFileSync('sslcert/selfsigned.crt');

// Main Router
const routes = require('./routes');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

// Server middleware
app.use((req, res, next) => {
  console.log(`Request from IP ${req.ip} requesting ${req.url} with HTTP Method ${req.method}`);
  next();
});

// Main routes
app.use('/', routes);

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080, () => {
  console.log("HTTP Server running on port 8080");
 });
httpsServer.listen(8443, () => {
  console.log("HTTPS Server running on port 8443");
 });
