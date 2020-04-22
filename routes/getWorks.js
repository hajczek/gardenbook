const express = require("express");
const router = express.Router();

const { getWorks } = require("../controllers/getWorks");

// router.get("/", (req, res) => res.send("User Account Details"));
router.route("/").get(getWorks);

module.exports = router;
