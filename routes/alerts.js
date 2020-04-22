const express = require("express");
const router = express.Router();

const {
  getAlerts,
  addAlert,
  editAlert,
  deleteAlert,
} = require("../controllers/alerts");

// router.get("/", (req, res) => res.send("Alerts"));
router.route("/").get(getAlerts).post(addAlert);
router.route("/:id").put(editAlert).delete(deleteAlert);

module.exports = router;
