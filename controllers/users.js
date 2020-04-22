// @desc Get all details about user account
// @route GET/account/:id
// @access Public
exports.getUserDetails = (req, res, next) => {
  res.send("GET User Account Details");
};

// @desc Add user
// @route POST/account
// @access Public
exports.addUser = (req, res, next) => {
  res.send("POST User");
};

// @desc Edit user details
// @route PUT/account/:id
// @access Public
exports.editUserDetails = (req, res, next) => {
  res.send("PUT User");
};

// @desc Delete user
// @route DELETE/account/:id
// @access Public
exports.deleteUser = (req, res, next) => {
  res.send("DELETE User");
};
