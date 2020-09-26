'use strict'

const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const MongoClient= require('mongodb').MongoClient;
const session = require("express-session");
const path = require('path');
const index = require('./modules/router/index')
const http = require('http')
const app = express();
app.use(express.static('public'));



app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', index);



const mongoClient = new MongoClient("mongodb://localhost:27017/", { useUnifiedTopology: true, useNewUrlParser: true });

let dbClient;

mongoClient.connect( (err, client) => {
  if (err) {
    console.log(`app.js : ошибка при попытке вызова connect к db\n`);
    return console.log(err);
  }

  dbClient = client;

  app.locals.collectionUsers = client.db("DB").collection("users");
  
  app.locals.collectionChat = client.db("DB").collection("chat");

  app.listen(3000, ()=> {
    console.log(`api запущен\n`);
  });
})


module.exports = app;
