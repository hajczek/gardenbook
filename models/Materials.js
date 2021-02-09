const mongoose = require('mongoose');

const MaterialsSchema = new mongoose.Schema({
  materialName: {
    type: String,
    trim: true,
    required: true,
  },
  materialPhoto: {
    type: String,
    trim: true,
    required: [false],
    default: '',
  },
  materialQuant: {
    type: Number,
    required: true,
  },
  materialUnit: {
    type: String,
    trim: true,
    required: true,
  },
  materialPrice: {
    type: Number,
    required: true,
  },
  addedDate: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: String,
  },
});

module.exports = mongoose.model('Materials', MaterialsSchema);
