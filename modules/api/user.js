"use strict"

const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const ObjectID= require('mongodb').ObjectID;

const db = require('../db/index');

router.get('/:id', (req,res)=>{
    db.get().collection('users').findOne({  _id: ObjectID(req.params.id)}, (err, doc) =>{
      doc.password=undefined;
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      else {
        if (doc) {
          console.log(`user с _id${JSON.stringify(req.params.id)} найден` );
          return res.send(doc);
        }
        else {
          console.log(`user с _id ${JSON.stringify(req.params.id)} не найден` );
          return res.sendStatus(500);
        }
      }
    });
  });

module.exports = router;
