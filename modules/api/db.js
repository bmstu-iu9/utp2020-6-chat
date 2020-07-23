"use strict"

const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');

const db = require('../db/index');
// 
// router.get('/users', (req, res)=>{
//     db.get().collection('users').find().toArray((err, docs) => {
//       if (err) {
//       console.log(err);
//         return res.sendStatus(500);
//       }
//       return res.send(docs);
//     });
//   });

module.exports = router;
