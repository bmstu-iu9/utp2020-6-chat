
'use strict'

const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');


const db = require('../db/index');

router.get('/', (req, res) => {
    const collection = req.app.locals.collectionUsers;
    collection.find().toArray(function(err, users){
         
        if(err) return console.log(err);
        res.json(users)
    });
})

module.exports = router;
