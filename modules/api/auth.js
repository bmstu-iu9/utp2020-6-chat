"use strict"

const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');

const db = require('../db/index');

router.post('/', (req,res)=>{
    db.get().collection('users').findOne({ username: req.body.username}, (err, doc) =>{
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      else {
        if (doc) {
          console.log(`user ${JSON.stringify(req.body.username)} найден` );
          res.redirect("public/html/chat.html")
        }
        else {
          console.log(`user ${JSON.stringify(req.body.username)} не найден` );
          res.json({isKnownUser: false});
        }
      }
    });
  });

module.exports = router;
     