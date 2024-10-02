import connectDB from '@/config/db'; // Import your database connection logic
import registerHandler from './controllers/register'; // Adjust path for local import

connectDB(); // Ensure database connection

export default async function handler(req, res) {
  await registerHandler(req, res);
}
