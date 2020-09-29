
'use strict'

const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
let ObjectID= require('mongodb').ObjectID;

router.post('/', (req, res) => {
    let myId = req.body.myId;
    let friendId =req.body.friendId;
    console.log(321);
    const collection = req.app.locals.collectionUsers;
    collection.updateOne({_id : ObjectID(myId)}, {$push : {friends : friendId}}, (err) => {
        if(err) return console.log(err);
        console.log(321);
        res.sendStatus(200);
    });
})

module.exports = router;
