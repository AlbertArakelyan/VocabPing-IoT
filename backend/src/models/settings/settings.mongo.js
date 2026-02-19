const mongoose = require('mongoose');

const settingSchema = new mongoose.Schema({
  isNotificationEnabled: {
    type: Boolean,
    required: true,
    default: true,
  },
  notificationIntervalMinutes: {
    type: Number,
    required: true,
    default: 60,
  },
  latestWifiKey: {
    type: String,
  },
  serverUrl: {
    type: String,
  },
  tgBotToken: {
    type: String,
  },
  shouldUseTelegramBot: {
    type: Boolean,
    required: true,
    default: false,
  },
  tgUserIds: {
    type: [String],
    default: null,
  },
  shouldDisplayOnScreen: {
    type: Boolean,
    required: true,
    default: true,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

const Setting = mongoose.model('Setting', settingSchema);

module.exports = Setting;
