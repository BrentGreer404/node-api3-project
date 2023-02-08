const express = require('express');

const server = express();
server.use(express.json()) 

const { logger } = require('./middleware/middleware')
const usersRouter = require('./users/users-router')
// global middlewares and the user's router need to be connected here 

server.use('/api/users', logger, usersRouter)


server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
