// app.js or server.js

const express = require('express');
const cors = require('cors'); // Importing CORS for cross-origin requests
const app = express();
const PORT = 3001;

// Middleware
app.use(cors()); // Enables CORS for all requests
app.use(express.json()); // Parses incoming JSON requests

// Example route
app.get('/api/mentors', (req, res) => {
  // Fetch mentors from the database
  res.json([
    { id: 1, name: 'John Doe', areas_of_expertise: ['Finance', 'Marketing'] },
    { id: 2, name: 'Jane Smith', areas_of_expertise: ['Technology', 'Operations'] },
  ]);
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
