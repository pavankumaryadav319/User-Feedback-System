
const Feedback = require('../models/Feedback');

exports.submitFeedback = async (req, res) => {
  try {
    const newFeedback = new Feedback(req.body);
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFeedback = async (req, res) => {
  try {
    const { category, sort } = req.query;
    let filter = category ? { category } : {};
    let feedback = await Feedback.find(filter).sort(sort === 'desc' ? '-createdAt' : 'createdAt');
    res.json(feedback);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
