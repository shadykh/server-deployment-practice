'use strict';

const express = require('express');

const app = express();

const error500Handler = require('./error-handlers/500');

const error404Handler = require('./error-handlers/404');

app.get('/', homeHandler);

app.get('/iwannawrong', wrongHandler);

function homeHandler(req, res) {
  res.send('I am on fire๐ฅ');
}

function wrongHandler(req, res) {
  throw new Error('You Got what you want!! Something went wrong :|');
}

app.use('*', error404Handler);

app.use(error500Handler);

function start(port) {
  app.listen(port, () => {
    console.log(`๐ ~ file: server.js ~ line 29 ~ app.listen ~ we are launching ๐ฅ on port => ${port}`);
  });
}

module.exports = {
  app: app,
  start: start,
};

// comment