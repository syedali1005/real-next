import bcrypt from 'bcryptjs';
import connectDB from '@/config/db'; // Import your database connection logic
import User from '@/models/User.model'; // Import your User model

connectDB(); // Ensure your MongoDB is connected

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { firstname, lastname, email, password } = req.body;

      // Check if the user already exists
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const user = await User.create({
        firstname,
        lastname,
        email,
        password: hashedPassword,
      });

      if (user) {
        return res.status(201).json({ message: 'User created successfully' });
      } else {
        return res.status(400).json({ message: 'Failed to create user' });
      }
    } catch (error) {
      console.error('Error during registration:', error); // Log the error for debugging
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
