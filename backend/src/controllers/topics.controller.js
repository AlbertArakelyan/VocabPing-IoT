const { getAllTopics } = require('../models/topics/topics.model');
const httpStatuses = require("../constants/httpStatuses");

async function httpGetTopics(req, res) {
  try {
    const topics = await getAllTopics();

    return res.status(httpStatuses.OK).json({
      success: true,
      data: topics,
      message: 'Topics retrieved successfully',
    });
  } catch (error) {
    return res.status(httpStatuses.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Topics not retrieved',
    });
  }
}

module.exports = {
  httpGetTopics,
};