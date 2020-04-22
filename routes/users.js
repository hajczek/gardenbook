const express = require("express");
const router = express.Router();

const {
  getUserDetails,
  addUser,
  editUserDetails,
  deleteUser,
} = require("../controllers/users");

// router.get("/", (req, res) => res.send("User Account Details"));
router.route("/").post(addUser);
router
  .route("/:id")
  .get(getUserDetails)
  .put(editUserDetails)
  .delete(deleteUser);

module.exports = router;
