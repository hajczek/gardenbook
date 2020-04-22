const mongoose = require("mongoose");

const PlantsSchema = mongoose.Schema({
  plantName: {
    type: String,
    trim: true,
    required: [true, "Podaj nazwę rośliny"],
  },
  plantPhoto: {
    type: String,
    trim: true,
    required: [false],
    default: "",
  },
  plantQuant: {
    type: Number,
    required: [true, "Podaj ilość roślin"],
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
    default: "",
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
});

module.exports = mongoose.model("Plants", PlantsSchema);
