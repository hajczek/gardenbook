const express = require("express");
const router = express.Router();

const { getMaterials } = require("../controllers/getMaterials");

// router.get("/", (req, res) => res.send("Materials"));
router.route("/").get(getMaterials);

module.exports = router;
