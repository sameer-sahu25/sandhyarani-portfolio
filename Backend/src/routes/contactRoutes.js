const express = require('express');
const router = express.Router();
const { submitMessage, getMessages } = require('../controllers/contactController');
const { protect } = require('../middlewares/auth');

router.post('/', submitMessage);
router.get('/messages', protect, getMessages);

module.exports = router;
