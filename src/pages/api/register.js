// src/pages/api/register.js
import connectDB from '../../config/db'; // Correct relative path to db.js
import registerHandler from './controllers/register'; // Correct relative path to register.js

connectDB(); // Ensure your MongoDB is connected

export default registerHandler; // Use the handler from controllers
