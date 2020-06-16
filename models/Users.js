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
  userBackgroundImage: {
    type: String,
    required: false,
    default: "../gardenbook-bg.jpg",
  },
  accountSets: {
    workPlanner: {
      type: Boolean,
      required: [false],
      default: true,
    },
    gardenPlan: {
      type: Boolean,
      required: [false],
      default: false,
    },
    gardenStatistic: {
      type: Boolean,
      required: [false],
      default: false,
    },
    gardenHistory: {
      type: Boolean,
      required: [false],
      default: false,
    },
    searchWorkers: {
      type: Boolean,
      required: [false],
      default: false,
    },
  },
  addedDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Users", UsersSchema);
