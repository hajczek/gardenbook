const express = require("express");
const router = express.Router();

const { getUserAccountDetails } = require("../controllers/getUserAccount");

// router.get("/", (req, res) => res.send("User Account Details"));
router.route("/").get(getUserAccountDetails);

module.exports = router;
