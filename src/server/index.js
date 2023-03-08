const express = require('express');
const cors = require('cors');
const server = express();

server.use(cors());

server.use(express.json());
server.use(
  express.urlencoded({
    extended: true,
  })
);

require('../routes/index')(server);

module.exports = server;
