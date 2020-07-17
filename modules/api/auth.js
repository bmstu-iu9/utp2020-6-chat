"use strict"

const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');

const db = require('../db/index');

// router.post('/', (req,res)=>{
//   db.get().collection('users').findOne({ username: req.body.username}, (err, doc)=> {
//     if (err) {
//       return res.isKnownUser=false;
//     }
//     return res.isKnownUser=true;
//   })
// })

router.post('/', (req, res)=>{
    console.log(req.body)
})

module.exports = router;
