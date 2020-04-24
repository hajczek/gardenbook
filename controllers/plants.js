const Plants = require("../models/Plants");

// @desc Get all plants
// @route GET/plants
// @access Public
exports.getPlants = async (req, res, next) => {
  try {
    const plants = await Plants.find();

    return res.status(200).json({
      success: true,
      count: plants.length,
      data: plants,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Błąd serwera",
    });
  }
};

// @desc Add plant
// @route POST/plants
// @access Public
exports.addPlant = async (req, res, next) => {
  try {
    const {
      plantName,
      plantPhoto,
      plantQuant,
      plantWateringFreq,
      plantFetilizer,
      plantFetilizerFreq,
      plantFetilizerDose,
      plantPrice,
      addedDate,
    } = req.body;

    const plant = await Plants.create(req.body);

    return res.status(201).json({
      success: true,
      data: plant,
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

// @desc Edit plant
// @route PUT/plants/:id
// @access Public
exports.editPlant = async (req, res, next) => {
  try {
    const {
      plantName,
      plantPhoto,
      plantQuant,
      plantWateringFreq,
      plantFetilizer,
      plantFetilizerFreq,
      plantFetilizerDose,
      plantPrice,
      addedDate,
    } = req.body;

    const plant = await Plants.findById(req.params.id).updateOne(req.body);

    if (!plant) {
      return res.status(404).json({
        success: false,
        error: "Nie znaleziono tego materiału",
      });
    }

    return res.status(200).json({
      success: true,
      data: { plant },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Błąd serwera",
    });
  }
};

// @desc Delete plant
// @route DELETE/plants/:id
// @access Public
exports.deletePlant = async (req, res, next) => {
  try {
    const plant = await Plants.findById(req.params.id);

    if (!plant) {
      return res.status(404).json({
        success: false,
        error: "Nie znaleziono tego materiału",
      });
    }

    await plant.remove();

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
