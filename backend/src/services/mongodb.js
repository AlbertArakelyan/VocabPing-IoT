const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.log(err);
});

const mongoConnect = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
};

const mongoDisconnect = async () => {
  await mongoose.disconnect();
};

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
