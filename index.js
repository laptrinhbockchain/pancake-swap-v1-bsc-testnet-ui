var express = require('express');
var serveStatic = require('serve-static');

var app = express();

let port = 8888;
// let appDir = "pancake";
let appDir = "heraswap";
app.use(serveStatic(appDir, { index: ['index.html'] }))
app.listen(port);
console.log("The app listen on port:", port);