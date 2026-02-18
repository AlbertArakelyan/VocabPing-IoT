const express = require('express');

const wordsRouter = require('./words.router');

const api = express.Router();

api.use('/words', wordsRouter);

module.exports = api;
