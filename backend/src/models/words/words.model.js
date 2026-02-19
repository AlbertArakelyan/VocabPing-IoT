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

async function getRandomWord() {
  const unsentRandomWordAggregate = await Word.aggregate([
    { $match: { isSent: false } },
    { $sample: { size: 1 } },
  ]);
  let randomWord = unsentRandomWordAggregate[0];

  if (!randomWord) {
    const randomWordAggregate = await Word.aggregate([
      { $sample: { size: 1 } },
    ]);

    randomWord = randomWordAggregate[0];
  }

  if (!randomWord) {
    return null;
  }

  await Word.findByIdAndUpdate(randomWord._id, { isSent: true });

  return randomWord;
}

module.exports = {
  createWord,
  getRandomWord,
};
