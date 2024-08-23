const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run(`CREATE TABLE mentors (
        id INTEGER PRIMARY KEY,
        name TEXT,
        availability TEXT,
        areas_of_expertise TEXT,
        is_premium INTEGER
    )`);
    
    db.run(`CREATE TABLE students (
        id INTEGER PRIMARY KEY,
        name TEXT,
        availability TEXT,
        area_of_interest TEXT
    )`);
    
    db.run(`CREATE TABLE bookings (
        id INTEGER PRIMARY KEY,
        student_id INTEGER,
        mentor_id INTEGER,
        scheduled_time TEXT,
        duration INTEGER,
        cost REAL,
        FOREIGN KEY(student_id) REFERENCES students(id),
        FOREIGN KEY(mentor_id) REFERENCES mentors(id)
    )`);
});

module.exports = db;
