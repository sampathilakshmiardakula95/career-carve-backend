const express = require('express');
const router = express.Router();
const mentorController = require('../controllers/mentorController');

router.get('/mentors', mentorController.getAllMentors);

module.exports = router;
