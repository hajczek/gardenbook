const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  userName: {
    type: String,
    trim: true,
    required: [true, "Podaj nazwę użytkownika"],
  },
  userEmail: {
    type: String,
    trim: true,
    required: [true, "Podaj adres e-mail"],
  },
  userPass: {
    type: String,
    trim: true,
    required: [true, "Podaj hasło"],
  },
  userTel: {
    type: String,
    required: [false],
    default: "",
  },
  userPlace: {
    type: String,
    required: [false],
    default: "",
  },
  userLogged: {
    type: Boolean,
    required: [true],
    default: false,
  },
  accountSets: {
    workPlanner: {
      type: Boolean,
      required: [true],
      default: true,
    },
    gardenPlan: {
      type: Boolean,
      required: [true],
      default: true,
    },
    gardenStatistic: {
      type: Boolean,
      required: [true],
      default: true,
    },
    gardenHistory: {
      type: Boolean,
      required: [true],
      default: true,
    },
    searchWorkers: {
      type: Boolean,
      required: [true],
      default: true,
    },
  },
  addedDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Users", UsersSchema);
