// @desc Get all works
// @route GET/works
// @access Public
exports.getWorks = (req, res, next) => {
  res.send("GET Works");
};

// @desc Add work
// @route POST/works
// @access Public
exports.addWork = (req, res, next) => {
  res.send("POST Work");
};

// @desc Edit work
// @route PUT/works/:id
// @access Public
exports.editWork = (req, res, next) => {
  res.send("PUT Work");
};

// @desc Delete work
// @route DELETE/works/:id
// @access Public
exports.deleteWork = (req, res, next) => {
  res.send("DELETE Work");
};
