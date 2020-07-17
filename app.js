'use strict'

const express = require('express');

let dp = require('./modules/db/index');

const path = require('path');

let app = express();


app.use(express.static('public'));

db.connect('mongodb://localhost:27017',
  {
     useUnifiedTopology: true,
     useNewUrlParser: true
  }, function (err) {
  if (err) {
    return console.log(err);
  }
  app.listen(3000);
})
