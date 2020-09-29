
'use strict'

const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
let ObjectID= require('mongodb').ObjectID;

router.post('/', (req, res) => {
    let id = req.body.id;
    const collection = req.app.locals.collectionUsers;
    let n=0
    collection.find({_id : ObjectID(id)}, (err, obj) => {
        if(err) return console.log(err);
        let arrOfFriends = new Array();
        for (let i=0; i<obj.friends.length; i++) {
          let friendId=obj.friends[i]
          collection.find({_id : ObjectID(friendId)}, (err, friend)=> {
            delete friend.password
            delete friend.username
            arrOfFriends.push(friend);
            n++
          })
        }
        while (n!=obj.friends.length) {
          let o=0;
          o++;
        }
        res.json(arrOfFriends)
    });
})

module.exports = router;
