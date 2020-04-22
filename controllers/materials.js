// @desc Get all materials
// @route GET/materials
// @access Public
exports.getMaterials = (req, res, next) => {
  res.send("GET Materials");
};

// @desc Add material
// @route POST/materials
// @access Public
exports.addMaterial = (req, res, next) => {
  res.send("POST Material");
};

// @desc Edit material
// @route PUT/materials/:id
// @access Public
exports.editMaterial = (req, res, next) => {
  res.send("PUT Material");
};

// @desc Delete material
// @route DELETE/materials/:id
// @access Public
exports.deleteMaterial = (req, res, next) => {
  res.send("DELETE Material");
};
