const mongoose = require('mongoose');
const database = 'mongodb://localhost:27017';

mongoose.connect(database, { useNewUrlParser: true });


const notificationSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  userEmail: {
    type: String,
  },
  userPhoneNumber: {
    type: String,
  },
  category: {
    type: Number,
  },
  sendType: {
    type: Number,
  },
  timestamp: {
    type: String,
  }
});

module.exports = mongoose.model('Notification', notificationSchema);
