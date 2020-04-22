const express = require("express");
const router = express.Router();

const { getPlants } = require("../controllers/getPlants");

// router.get("/", (req, res) => res.send("Plants"));
router.route("/").get(getPlants);

module.exports = router;
