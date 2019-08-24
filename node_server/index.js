'use strict';

const dotenvExpand = require('dotenv-expand')
dotenvExpand(require('dotenv').config())
const express = require('express')
const constants = require('./lib/constants')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const port = process.env.REACT_APP_PORT

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(morgan(process.env.REACT_APP_MODE));

app.use(function(request, response, next) {
	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
	next();
})

app.get('/api/photo', (req, res) => {
  res.send(JSON.stringify(constants.images));
})

app.get('/api/cities', (req, res) => {
  res.send(JSON.stringify(constants.city));
})

app.get('/api/cities/:code', (req, res) => {
  let city = constants.city.filter(v => v.code === req.params.code);
  let results = city ? city[0] : [];
  res.send(JSON.stringify(results));
})

app.listen(port, () => console.log(`Weather app listening on port ${port}!`))
