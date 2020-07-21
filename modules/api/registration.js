"use strict";
const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');

const db = require('../db/index');


router.post('/', (req, res)=> {
  let user = {
    username: req.body.username,
    age: req.body.age
  };
  db.get().collection('users').insertOne(user, (err, result) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    console.log(`user ${user.username} добавлен в БД`);
    return res.sendStatus(200);
  })
})

router.get('/', (req, res)=>{
    res.send("This is reag");
});

module.exports = router;
