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
    },
    workMatQuant: {
      type: Number,
      required: [false],
    },
    workMatUnit: {
      type: String,
      required: [false],
    },
  },
  workTerm: {
    type: String,
    trim: true,
    required: [true, "Wybierz termin pracy"],
    default: "",
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
