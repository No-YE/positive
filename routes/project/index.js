const express = require('express');
const app = express();
const ctrl = require('./project.ctrl');
const isLoggedIn = require('../../util');

app.post('/registerProject', isLoggedIn, ctrl.registerProject);
app.get('/takeProject', isLoggedIn, ctrl.takeProject);

module.exports = app;