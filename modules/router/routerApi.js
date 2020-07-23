const express = require("express");
const router = express.Router();

const auth = require("../api/auth");

const registration = require("../api/registration");

const send = require("../api/send");

const logout = require("../api/logout");

<<<<<<< HEAD
=======
const db = require("../api/db");

const user = require("../api/user");

router.get('/', ()=>{})

>>>>>>> origin/pre-main
router.use('/auth', auth);

router.use('/registration', registration);

router.use('/send', send);

router.use('/logout', logout);

router.use('/db', db);

router.use('/user', user);

module.exports = router;
