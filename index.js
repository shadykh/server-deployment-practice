'use strict';

const server = require('./server');

require('dotenv').config();

const port = process.env.PORT || 4222;

server.start(port);