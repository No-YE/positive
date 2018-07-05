const express = require('express');
const app = express();
const ctrl = require('./account.ctrl');

app.post("/account/signUp", ctrl.signUp);
app.post("/account/logIn", ctrl.logIn);

module.exports = app;