// @desc Get all plants
// @route GET/plants
// @access Public
exports.getPlants = (req, res, next) => {
  res.send("GET Plants");
};

// @desc Add plant
// @route POST/plants
// @access Public
exports.addPlant = (req, res, next) => {
  res.send("POST Plant");
};

// @desc Edit plant
// @route PUT/plants/:id
// @access Public
exports.editPlant = (req, res, next) => {
  res.send("PUT Plant");
};

// @desc Delete plant
// @route DELETE/plants/:id
// @access Public
exports.deletePlant = (req, res, next) => {
  res.send("DELETE Plant");
};
