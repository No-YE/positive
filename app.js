const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI)

const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'content-type, x-access-token');
    next();
});

//API
app.use('/', (req, res) => res.send('Hello World!!'));
app.use(require('./routes/docs'));
app.use(require('./routes/account'));
app.use(require('./routes/post'));
app.use(require('./routes/project'));

app.listen(PORT, () => console.log("server start at "+PORT));