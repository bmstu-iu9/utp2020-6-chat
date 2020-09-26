


'use strict'

const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');


router.get('/', (req, res) => {
    const collection = req.app.locals.collectionChat;
    collection.find().toArray(function(err, users){
         
        if(err) return console.log(err);
        res.json(users)
    });
})

module.exports = router;
