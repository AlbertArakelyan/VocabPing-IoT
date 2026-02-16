const { createWord } = require('../models/words/words.model');
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
      body: newWord,
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

module.exports = {
  httpCreateWord,
};
