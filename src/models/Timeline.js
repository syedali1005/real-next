// src/models/Timeline.js
const mongoose = require('mongoose');

const timelineSchema = mongoose.Schema(
  {
    year: { type: String, required: true },
    company: { type: String, required: true },
    position: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Timeline = mongoose.model('Timeline', timelineSchema);
module.exports = Timeline;
