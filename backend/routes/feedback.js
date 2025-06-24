
const express = require('express');
const router = express.Router();
const { submitFeedback, getFeedback } = require('../controllers/feedbackController');

router.post('/feedback', submitFeedback);
router.get('/feedback', getFeedback);

module.exports = router;
