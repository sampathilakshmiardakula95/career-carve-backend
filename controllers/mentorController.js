const Mentor = require('../models/mentorModel');

exports.getAllMentors = (req, res) => {
    Mentor.getAll((err, mentors) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(mentors);
    });
};
