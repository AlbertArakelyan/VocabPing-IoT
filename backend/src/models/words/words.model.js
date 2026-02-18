const Word = require('./words.mongo');
const { getTopicByName, createTopic } = require('../topics/topics.model');

async function createWord(word) {
  const topic = await getTopicByName(word.topic);

  if (!topic) {
    const newTopic = await createTopic({ topicName: word.topic });
    const newWord = {
      ...word,
      topic: newTopic._id,
    };

    return await new Word(newWord).save();
  }

  const newWord = {
    ...word,
    topic: topic._id,
  };

  return await new Word(newWord).save();
}

module.exports = {
  createWord,
};
