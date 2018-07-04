const express = require('express');
const router = express.Router();
const ctrl = require('./account.ctrl');

router.post("/account/signUp", ctrl.signUp);
router.post("/account/logIn", ctrl.logIn);

module.exports = router;