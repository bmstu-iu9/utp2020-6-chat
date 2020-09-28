


'use strict'

const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');


router.post('/', (req, res) => {
    let password = req.body.password
    let username = req.body.username
    console.log("pass = " + password)
    console.log("user = " + username)
    const collectionUsers = req.app.locals.collectionUsers;
    const collectionChat = req.app.locals.collectionChat;
    collectionUsers.findOne({username: username, password: password}, (err,doc) => {
      if (err) console.log(err)
      console.log("found in Users " + doc)
      let messages
      collectionChat.findOne({ _id: doc._id }, (err, doc) => {
        if (err) console.log(err)
        messages=doc.messages
        console.log("found in Chat " + messages)
        messages.sort((a,b) => {
          return (a.messages.date<b.messages.date)
        })
        res.json(messages)
      })
    });
})

module.exports = router;
