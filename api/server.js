require('dotenv').config(); // Load environment variables

console.log('MONGO_URI:', process.env.MONGO_URI);  // Log to confirm

const express = require('express');
const connectDB = require('../src/config/db'); // Adjust the path if necessary

connectDB(); // Make sure this connects to MongoDB using MONGO_URI

const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
