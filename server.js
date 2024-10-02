import express from 'express';
import next from 'next';
import connectDB from './src/config/db.js'; // Adjust the path if necessary
import helloRoutes from './api/hello.js'; // Import hello routes
import registerRoutes from './api/routes/registerRoutes.js'; // Import register routes

require('dotenv').config(); // Use dotenv with import instead

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

connectDB();

app.prepare().then(() => {
  const server = express();

  // Use Express API routes
  server.use('/api/timeline', require('./api/routes/timelineRoutes'));
  server.use('/api/hello', require('./api/hello'));

  // Handle Next.js pages
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
