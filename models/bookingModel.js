const db = require('../db/sqlite');

const Booking = {
  // Create the bookings table if it doesn't exist
  init: () => {
    db.run(
      `CREATE TABLE IF NOT EXISTS bookings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        student_id INTEGER,
        mentor_id INTEGER,
        scheduled_time TEXT,
        duration INTEGER,
        cost REAL,
        FOREIGN KEY(student_id) REFERENCES students(id),
        FOREIGN KEY(mentor_id) REFERENCES mentors(id)
      )`
    );
  },

  // Fetch all bookings
  getAllBookings: (callback) => {
    const query = 'SELECT * FROM bookings';
    db.all(query, [], (err, rows) => {
      if (err) {
        callback(err);
      } else {
        callback(null, rows);
      }
    });
  },

  // Add a new booking
  addBooking: (student_id, mentor_id, scheduled_time, duration, cost, callback) => {
    const query = `INSERT INTO bookings (student_id, mentor_id, scheduled_time, duration, cost)
                   VALUES (?, ?, ?, ?, ?)`;
    db.run(query, [student_id, mentor_id, scheduled_time, duration, cost], function (err) {
      if (err) {
        callback(err);
      } else {
        callback(null, { id: this.lastID });
      }
    });
  },
};

module.exports = Booking;
