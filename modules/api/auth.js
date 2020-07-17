"use strict"

const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');

const db = requie('../db/index');

router.post('/', urlencodedParser, (req,res)=>{
  db.get().collection('users').findOne({ username: req.body.username}, (err, doc)=> {
    if (err) {
      return res.isKnownUser=false;
    }
    return res.isKnownUser=true;
  })
})

module.exports = router;
