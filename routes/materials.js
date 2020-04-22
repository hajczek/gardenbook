const express = require("express");
const router = express.Router();

const {
  getMaterials,
  addMaterial,
  editMaterial,
  deleteMaterial,
} = require("../controllers/materials");

// router.get("/", (req, res) => res.send("Materials"));
router.route("/").get(getMaterials).post(addMaterial);
router.route("/:id").put(editMaterial).delete(deleteMaterial);

module.exports = router;
