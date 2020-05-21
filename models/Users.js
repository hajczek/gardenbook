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
      type: String,
      required: [false],
      default: "on",
    },
    gardenPlan: {
      type: String,
      required: [false],
      default: "",
    },
    gardenStatistic: {
      type: String,
      required: [false],
      default: "",
    },
    gardenHistory: {
      type: String,
      required: [false],
      default: "",
    },
    searchWorkers: {
      type: String,
      required: [false],
      default: "",
    },
  },
  addedDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Users", UsersSchema);
