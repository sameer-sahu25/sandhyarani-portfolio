const express = require('express');
const router = express.Router();
const { getServices, createService, updateSkill, deleteService } = require('../controllers/servicesController');
const { protect } = require('../middlewares/auth');

router.get('/', getServices);
router.post('/', protect, createService);
router.put('/:id', protect, updateSkill);
router.delete('/:id', protect, deleteService);

module.exports = router;
