const express = require('express');

const { httpCreateWord, httpGetRandomWord } = require('../controllers/words.controller');

const wordsRouter = express.Router();

wordsRouter.post('/', httpCreateWord);
wordsRouter.get('/random', httpGetRandomWord);

module.exports = wordsRouter;