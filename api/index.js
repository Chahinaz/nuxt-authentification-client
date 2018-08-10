require('./models/userModel')
require('./config/passport')

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3333;

app.listen(port);

console.log('RESTful API server started on : ' + port);
