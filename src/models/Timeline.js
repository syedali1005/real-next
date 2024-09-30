// src/models/Timeline.js
const mongoose = require('mongoose');

const timelineSchema = new mongoose.Schema({
    year: { type: Number, required: true },
    company: { type: String, required: true },
    position: { type: String, required: true },
    description: { type: String, required: true },
});

const Timeline = mongoose.model('Timeline', timelineSchema);
module.exports = Timeline;
