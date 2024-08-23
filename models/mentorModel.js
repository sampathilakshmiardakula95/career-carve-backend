const db = require('../db/sqlite');

const Mentor = {
  // Create the mentors table if it doesn't exist
  init: () => {
    db.run(
      `CREATE TABLE IF NOT EXISTS mentors (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        availability TEXT,
        areas_of_expertise TEXT,
        is_premium INTEGER
      )`
    );
  },

  // Fetch all mentors
  getAllMentors: (callback) => {
    const query = 'SELECT * FROM mentors';
    db.all(query, [], (err, rows) => {
      if (err) {
        callback(err);
      } else {
        callback(null, rows);
      }
    });
  },

  // Fetch mentors by area of expertise
  getMentorsByExpertise: (area_of_expertise, callback) => {
    const query = 'SELECT * FROM mentors WHERE areas_of_expertise LIKE ?';
    db.all(query, [`%${area_of_expertise}%`], (err, rows) => {
      if (err) {
        callback(err);
      } else {
        callback(null, rows);
      }
    });
  },

  // Add a new mentor
  addMentor: (name, availability, areas_of_expertise, is_premium, callback) => {
    const query = `INSERT INTO mentors (name, availability, areas_of_expertise, is_premium)
                   VALUES (?, ?, ?, ?)`;
    db.run(query, [name, availability, areas_of_expertise, is_premium], function (err) {
      if (err) {
        callback(err);
      } else {
        callback(null, { id: this.lastID });
      }
    });
  },
};

module.exports = Mentor;
