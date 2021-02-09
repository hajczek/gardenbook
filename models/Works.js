const mongoose = require('mongoose');

const WorksSchema = new mongoose.Schema({
  workName: {
    type: String,
    trim: true,
    required: true,
  },
  workMaterial: {
    workMatName: {
      type: String,
      required: [false],
      default: '',
    },
    workMatQuant: {
      type: Number,
      required: [false],
      default: 0,
    },
    workMatUnit: {
      type: String,
      required: [false],
      default: 0,
    },
  },
  workTerm: {
    type: String,
    trim: true,
    required: true,
  },
  workAlert: {
    type: String,
    required: [false],
    default: '',
  },
  workDetails: {
    type: String,
    required: [false],
    default: '',
  },
  workDone: {
    type: Boolean,
    reguired: [false],
    default: false,
  },
  workTime: {
    type: Number,
    reguired: [false],
    default: 0,
  },
  workValue: {
    type: Number,
    reguired: [false],
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

module.exports = mongoose.model('Works', WorksSchema);
