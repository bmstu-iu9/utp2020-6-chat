
'use strict'

const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
let ObjectID= require('mongodb').ObjectID;

router.post('/', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    const collection = req.app.locals.collectionUsers;
    collection.find({username : username, password : password}, (err, obj) => {
        if(err) return console.log(err);

        res.id=obj._id
        return res
    });
})

module.exports = router;
