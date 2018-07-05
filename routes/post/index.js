const express = require('express');
const app = express();
const ctrl = require('./post.ctrl');
const isLoggedIn = require('../../util');

app.get('/post/thank', isLoggedIn, ctrl.getThank);
app.post('/post/thank', isLoggedIn, ctrl.postThank);
app.get('/post/praise', isLoggedIn, ctrl.getPraise);
app.post('/post/praise', isLoggedIn, ctrl.postPraise);

module.exports = app;