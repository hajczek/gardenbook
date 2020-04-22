const express = require("express");
const router = express.Router();

const {
  getWorks,
  addWork,
  editWork,
  deleteWork,
} = require("../controllers/works");

// router.get("/", (req, res) => res.send("User Account Details"));
router.route("/").get(getWorks).post(addWork);
router.route("/:id").put(editWork).delete(deleteWork);

module.exports = router;
