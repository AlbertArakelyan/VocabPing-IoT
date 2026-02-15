const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true,
    unique: true,
  },
  meaning: {
    type: String,
    required: true,
  },
  meaningAlt: {
    type: String,
  },
  description: {
    type: String,
  },
  topic: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Topic',
    required: true,
  },
  timesShown: {
    type: Number,
    default: 0,
  },
  lastShownAt: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

const Word = mongoose.model('Word', wordSchema);

module.exports = Word;
