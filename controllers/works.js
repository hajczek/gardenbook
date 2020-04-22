const Works = require("../models/Works");

// @desc Get all works
// @route GET/works
// @access Public
exports.getWorks = async (req, res, next) => {
  try {
    const works = await Works.find();

    return res.status(200).json({
      success: true,
      count: works.length,
      data: works,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Błąd serwera",
    });
  }
};

// @desc Add work
// @route POST/works
// @access Public
exports.addWork = async (req, res, next) => {
  try {
    const {
      workName,
      workMatName,
      workMatQuant,
      workMatUnit,
      workTerm,
      workDetails,
      workDone,
      workTime,
      workValue,
      addedDate,
    } = req.body;

    const work = await Works.create(req.body);

    return res.status(201).json({
      success: true,
      data: work,
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

// @desc Edit work
// @route PUT/works/:id
// @access Public
exports.editWork = async (req, res, next) => {
  try {
    const {
      workName,
      workMatName,
      workMatQuant,
      workMatUnit,
      workTerm,
      workDetails,
      workDone,
      workTime,
      workValue,
      addedDate,
    } = req.body;

    const work = await Works.findById(req.params.id).updateOne(req.body);

    if (!work) {
      return res.status(404).json({
        success: false,
        error: "Nie znaleziono pracy o tym tytule",
      });
    }

    return res.status(200).json({
      success: true,
      data: { work },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Błąd serwera",
    });
  }
};

// @desc Delete work
// @route DELETE/works/:id
// @access Public
exports.deleteWork = async (req, res, next) => {
  try {
    const work = await Works.findById(req.params.id);

    if (!work) {
      return res.status(404).json({
        success: false,
        error: "Nie znaleziono pracy o tym tytule",
      });
    }

    await work.remove();

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
