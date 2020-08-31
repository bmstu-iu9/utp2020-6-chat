const express = require("express");
const router = express.Router();

const auth = require("../api/auth");

const registration = require("../api/registration");

const send = require("../api/send");

const logout = require("../api/logout");



const user = require("../api/user");

const getAllUsers = require("../api/getAllUsers");

router.get('/', ()=>{})

router.use('/auth', auth);

router.use('/registration', registration);

router.use('/send', send);

router.use('/logout', logout);

router.use('/user', user);

router.use('/getAllUsers', getAllUsers);

module.exports = router;

