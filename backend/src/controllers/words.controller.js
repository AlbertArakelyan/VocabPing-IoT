const { createWord, getRandomWord } = require('../models/words/words.model');
const httpStatuses = require('../constants/httpStatuses');

async function httpCreateWord(req, res) {
  try {
    const word = req.body;
    const newWord = await createWord(word);

    if (!newWord) {
      return res.status(httpStatuses.BAD_REQUEST).json({
        success: false,
        message: 'Word not created',
      });
    }

    return res.status(httpStatuses.CREATED).json({
      success: true,
      data: newWord,
      message: 'Word created successfully',
    });
  } catch (e) {
    console.log(httpCreateWord.name, e);
    return res.status(httpStatuses.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Word not created',
    });
  }
}

async function httpGetRandomWord(req, res) {
  try {
    const word = await getRandomWord();

    if (!word) {
      return res.status(httpStatuses.NOT_FOUND).json({
        success: false,
        message: 'No word found',
      });
    }

    return res.status(httpStatuses.OK).json({
      success: true,
      data: word,
      message: 'Word retrieved successfully',
    });
  } catch (e) {
    console.log(httpGetRandomWord.name, e);
    return res.status(httpStatuses.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Word not retrieved',
    });
  }
}

module.exports = {
  httpCreateWord,
  httpGetRandomWord,
};
