const express = require('express');

const { httpCreateWord } = require('../controllers/words.controller');

const wordsRouter = express.Router();

wordsRouter.post('/', httpCreateWord);

module.exports = wordsRouter;