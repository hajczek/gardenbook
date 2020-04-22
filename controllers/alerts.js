// @desc Get all alerts
// @route GET/alerts
// @access Public
exports.getAlerts = (req, res, next) => {
  res.send("GET Alerts");
};

// @desc Add alert
// @route POST/alerts
// @access Public
exports.addAlert = (req, res, next) => {
  res.send("POST Alert");
};

// @desc Edit alert
// @route PUT/alerts/:id
// @access Public
exports.editAlert = (req, res, next) => {
  res.send("PUT Alert");
};

// @desc Delete material
// @route DELETE/alerts/:id
// @access Public
exports.deleteAlert = (req, res, next) => {
  res.send("DELETE Alert");
};
