const Topic = require('./topics.mongo');

async function createTopic(topic) {
    const newTopic = new Topic(topic);
    return await newTopic.save();
}

async function getTopicByName(topicName) {
    return await Topic.findOne({ topicName });
}

async function getAllTopics() {
    return await Topic.find();
}

module.exports = {
    createTopic,
    getTopicByName,
    getAllTopics,
};
