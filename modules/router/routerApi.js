const express = require("express");
const router = express.Router();

const auth = require("../api/auth");

const registration = require("../api/registration");

const send = require("../api/send");

const logout = require("../api/logout");

router.use('/auth', auth);

router.use('/registration', registration);

router.use('/send', send);

router.use('/logout', logout);

module.exports = router;