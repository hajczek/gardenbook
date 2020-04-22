const express = require("express");
const router = express.Router();

const { getAlerts } = require("../controllers/getAlerts");

// router.get("/", (req, res) => res.send("Alerts"));
router.route("/").get(getAlerts);

module.exports = router;
