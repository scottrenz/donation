const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const usersRouter = require('../users/users-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api', usersRouter);


server.get('/', (req, res) => {
    res.send("It's alive!");
  });
  

module.exports = server;
