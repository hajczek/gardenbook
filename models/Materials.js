const mongoose = require("mongoose");

const MaterialsSchema = new mongoose.Schema({
  materialName: {
    type: String,
    trim: true,
    required: [true, "Podaj nazwę materiału"],
  },
  materialPhoto: {
    type: String,
    trim: true,
    required: [false],
    default: "",
  },
  materialQuant: {
    type: Number,
    required: [true, "Podaj ilość materiału"],
  },
  materialUnit: {
    type: String,
    trim: true,
    required: [true, "Podaj jednostkę dla tego materiału"],
  },
  materialPrice: {
    type: Number,
    required: [true, "Podaj jednostkową cenę materiału"],
  },
  addedDate: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: String,
  },
});

module.exports = mongoose.model("Materials", MaterialsSchema);
