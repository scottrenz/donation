const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router');
const jokesRouter = require('../jokes/jokes-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/auth', authRouter);
server.use('/donate', usersRouter);
server.use('/api/jokes', authenticate, jokesRouter);


server.get('/', (req, res) => {
    res.send("It's alive!");
  });
  

module.exports = server;
