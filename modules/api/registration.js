"use strict"
const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');


router.post('/', (req, res)=> {
  console.log("SEC");
  let user = {
    username: req.body.username,
    password: req.body.password
  };
  const collection = req.app.locals.collectionUsers;
  collection.insertOne(user, (err, result) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    console.log(`user ${user.username} добавлен в БД`);
    return res.sendStatus(200);
  })
})
module.exports = router;

