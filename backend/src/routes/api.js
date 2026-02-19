const express = require('express');

const wordsRouter = require('./words.router');
const topicsRouter = require('./topics.router');

const api = express.Router();

api.use('/words', wordsRouter);
api.use('/topics', topicsRouter);

module.exports = api;
