// api/hello.js
const express = require('express');
const router = express.Router();

// Define the hello route
router.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' }); // Respond with a JSON message
});

module.exports = router;
