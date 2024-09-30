require('dotenv').config(); // Load environment variables

console.log('MONGO_URI:', process.env.MONGO_URI); // Log to confirm

const express = require('express');
const connectDB = require('../src/config/db'); // Adjust the path if necessary

connectDB(); // Connect to MongoDB using MONGO_URI

const app = express();

// Middleware to parse JSON requests
app.use(express.json()); // Required for POST requests with JSON payloads

// Basic route for checking if the server is running
app.get('/', (req, res) => {
    res.send('API is running...');
});

// API route to test
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Burair, World!' }); // Respond with a JSON message
});

// Define other routes as needed

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
