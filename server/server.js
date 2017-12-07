var express=require("express");
var bodyParser=require('body-parser');
var app = express();
var path = require('path');
var http = require('http');

app.use(express.static(path.join(__dirname, '../view_client')));
app.listen(8080);
console.log('Server running on http://localhost:8080');
