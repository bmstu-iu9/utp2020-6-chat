"use strict"

const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');

const db = require('../db/index');

router.post('/', (req,res)=>{
  let user= db.get().collection('users').findOne({ username: req.body.username});
  console.log(`поиск пользователя с ником ${req.body.username} дал результат ${user}\n`);
  if (user.result) {
    console.log('Найден\n')
    return res.isKnownUser=true;
  } else {
    console.log('Не найден\n')
   return res.isKnownUser=false;
  }
})

// router.post('/', (req, res)=>{
//     console.log(req.body)
// })

module.exports = router;
