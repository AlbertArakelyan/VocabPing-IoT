const Topic = require('./topics.mongo');

async function createTopic(topic) {
    const newTopic = new Topic(topic);
    return await newTopic.save();
}

async function getTopicByName(topicName) {
    return await Topic.findOne({ topicName });
}

module.exports = {
    createTopic,
    getTopicByName,
};
