const express = require("express");
const router = express.Router();

const {
  getPlants,
  addPlant,
  editPlant,
  deletePlant,
} = require("../controllers/plants");

// router.get("/", (req, res) => res.send("Plants"));
router.route("/").get(getPlants).post(addPlant);
router.route("/:id").put(editPlant).delete(deletePlant);
module.exports = router;
