import bcrypt from 'bcryptjs';
import connectDB from '@/config/db'; // Import your database connection logic
import User from '@/models/User.model'; // Import your User model

connectDB(); // Make sure your MongoDB is connected

export default async function handler(req, res) {
  if (req.method === 'POST') {
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
      res.status(201).json({ message: 'User created successfully' });
    } else {
      res.status(400).json({ message: 'Failed to create user' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
