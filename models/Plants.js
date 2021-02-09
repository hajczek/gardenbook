const mongoose = require('mongoose');

const PlantsSchema = new mongoose.Schema({
  plantName: {
    type: String,
    trim: true,
    required: true,
  },
  plantPhoto: {
    type: String,
    trim: true,
    required: [false],
    default: '',
  },
  plantQuant: {
    type: Number,
    required: true,
  },
  plantWateringFreq: {
    type: Number,
    required: [false],
    default: 0,
  },
  plantFetilizer: {
    type: String,
    trim: true,
    required: [false],
    default: '',
  },
  plantFetilizerFreq: {
    type: Number,
    required: [false],
    default: 0,
  },
  plantFetilizerDose: {
    type: Number,
    required: [false],
    default: 0,
  },
  plantPrice: {
    type: Number,
    required: [false],
    default: 0,
  },
  addedDate: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: String,
  },
});

module.exports = mongoose.model('Plants', PlantsSchema);
