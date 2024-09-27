// api/routes/timelineRoutes.js
const express = require('express');
const Timeline = require('../../src/models/Timeline');
const router = express.Router();

// GET all timeline items
router.get('/', async (req, res) => {
  try {
    const timeline = await Timeline.find({});
    res.json(timeline);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// POST a new timeline item
router.post('/', async (req, res) => {
  const { year, company, position, description } = req.body;
  try {
    const timelineItem = new Timeline({ year, company, position, description });
    await timelineItem.save();
    res.status(201).json(timelineItem);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add timeline item' });
  }
});

module.exports = router;
