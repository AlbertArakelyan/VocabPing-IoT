const express = require('express');
const { httpGetTopics } = require('../controllers/topics.controller');

const topicsRouter = express.Router();

topicsRouter.get('/', httpGetTopics);

module.exports = topicsRouter;
