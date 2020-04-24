const mongoose = require("mongoose");

const WorksSchema = new mongoose.Schema({
  workName: {
    type: String,
    trim: true,
    required: [true, "Dodaj tytuł pracy"],
  },
  workMaterial: {
    workMatName: {
      type: String,
      required: [false],
      default: "",
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
    required: [true, "Wybierz termin pracy"],
  },
  workAlert: {
    type: String,
    trim: true,
    required: [true, "Wybierz czas alarmu"],
  },
  workDetails: {
    type: String,
    required: [false],
    default: "",
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
});

module.exports = mongoose.model("Works", WorksSchema);