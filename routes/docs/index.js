const pathToSwaggerUi = require('swagger-ui-dist').absolutePath();
const express = require('express');
const app = express();

app.use('/swagger-ui', express.static(pathToSwaggerUi));
app.use('/v2/swagger.json', (req, res) => res.json(require('./swagger.json')));
app.use('/swagger', (req, res) => res.redirect('/swagger-ui?url=/v2/swagger.json'));

module.exports = app;