const Booking = require('../models/bookingModel');

exports.createBooking = (req, res) => {
    Booking.create(req.body, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Booking created successfully' });
    });
};

exports.getAllBookings = (req, res) => {
    Booking.getAll((err, bookings) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(bookings);
    });
};
