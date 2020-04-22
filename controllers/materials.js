const Materials = require("../models/Materials");

// @desc Get all materials
// @route GET/materials
// @access Public
exports.getMaterials = async (req, res, next) => {
  try {
    const materials = await Materials.find();

    return res.status(200).json({
      success: true,
      count: materials.length,
      data: materials,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Błąd serwera",
    });
  }
};

// @desc Add material
// @route POST/materials
// @access Public
exports.addMaterial = async (req, res, next) => {
  try {
    const {
      materialName,
      materialPhoto,
      materialQuant,
      materialUnit,
      materialPrice,
      addedDate,
    } = req.body;

    const material = await Materials.create(req.body);

    return res.status(201).json({
      success: true,
      data: material,
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

// @desc Edit material
// @route PUT/materials/:id
// @access Public
exports.editMaterial = async (req, res, next) => {
  try {
    const {
      materialName,
      materialPhoto,
      materialQuant,
      materialUnit,
      materialPrice,
      addedDate,
    } = req.body;

    const material = await Materials.findById(req.params.id).updateOne(
      req.body
    );

    if (!material) {
      return res.status(404).json({
        success: false,
        error: "Nie znaleziono tego materiału",
      });
    }

    return res.status(200).json({
      success: true,
      data: { material },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Błąd serwera",
    });
  }
};

// @desc Delete material
// @route DELETE/materials/:id
// @access Public
exports.deleteMaterial = async (req, res, next) => {
  try {
    const material = await Materials.findById(req.params.id);

    if (!material) {
      return res.status(404).json({
        success: false,
        error: "Nie znaleziono tego materiału",
      });
    }

    await material.remove();

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
