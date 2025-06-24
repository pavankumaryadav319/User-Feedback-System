
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  feedback: String,
  category: { type: String, enum: ['suggestion', 'bug report', 'feature request'], default: 'suggestion' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
