const Users = require("../models/Users");

// @desc Get all users
// @route GET /users/
// @access Public
exports.getUsers = async (req, res, next) => {
  try {
    const users = await Users.find();

    return res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Błąd serwera",
    });
  }
};

// @desc Get all details about user
// @route GET /users/:id
// @access Public
exports.getUserDetails = async (req, res, next) => {
  try {
    const user = await Users.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        error: "Nie ma takiego użytownika",
      });
    }
    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Błąd serwera",
    });
  }
};

// @desc Add user
// @route POST /users
// @access Public
exports.addUser = async (req, res, next) => {
  try {
    const {
      userName,
      userEmail,
      userPass,
      userTel,
      userPlace,
      userBackgroundImage,
      workPlanner,
      gardenPlan,
      gardenStatistic,
      gardenHistory,
      searchWorkers,
      addedDate,
    } = req.body;

    const user = await Users.create(req.body);

    return res.status(201).json({
      success: true,
      data: user,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Błąd serwera",
      });
    }
  }
};

// @desc Edit user details
// @route PUT /users/:id
// @access Public
exports.editUserDetails = async (req, res, next) => {
  try {
    const {
      userName,
      userEmail,
      userPass,
      userTel,
      userPlace,
      userLogged,
      workPlanner,
      gardenPlan,
      gardenStatistic,
      gardenHistory,
      searchWorkers,
      addedDate,
    } = req.body;

    const user = await Users.findById(req.params.id).updateOne(req.body);

    if (!user) {
      return res.status(404).json({
        success: false,
        error: "Nie ma takiego użytownika",
      });
    }

    return res.status(200).json({
      success: true,
      data: { user },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Błąd serwera",
    });
  }
};

// @desc Delete user
// @route DELETE /users/:id
// @access Public
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await Users.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        error: "Nie ma takiego użytkownika",
      });
    }

    await user.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Błąd serwera",
    });
  }
};
