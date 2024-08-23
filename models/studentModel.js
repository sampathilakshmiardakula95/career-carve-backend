const db = require('../db/sqlite');

const Student = {
  // Create the students table if it doesn't exist
  init: () => {
    db.run(
      `CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        availability TEXT,
        area_of_interest TEXT
      )`
    );
  },

  // Fetch all students
  getAllStudents: (callback) => {
    const query = 'SELECT * FROM students';
    db.all(query, [], (err, rows) => {
      if (err) {
        callback(err);
      } else {
        callback(null, rows);
      }
    });
  },

  // Add a new student
  addStudent: (name, availability, area_of_interest, callback) => {
    const query = `INSERT INTO students (name, availability, area_of_interest)
                   VALUES (?, ?, ?)`;
    db.run(query, [name, availability, area_of_interest], function (err) {
      if (err) {
        callback(err);
      } else {
        callback(null, { id: this.lastID });
      }
    });
  },
};

module.exports = Student;
