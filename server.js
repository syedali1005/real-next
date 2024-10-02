const express = require('express');
const next = require('next');
const connectDB = require('./src/config/db');

require('dotenv').config(); // Load environment variables
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

connectDB();

app.prepare().then(() => {
  const server = express();

  // Use Express API routes
  // server.use('/api/timeline', require('./api/routes/timelineRoutes'));
  server.use('/api/hello', require('./src/pages/api/hello'));

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
