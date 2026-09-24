const express = require("express");
const BloodStock = require("../models/BloodStock");

const router = express.Router();

// Get all blood stock
router.get("/", async (req, res) => {
  try {
    const bloodStock = await BloodStock.find().sort({ bloodGroup: 1 });

    res.status(200).json(bloodStock);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch blood stock",
      error: error.message,
    });
  }
});

// Add or update blood stock
router.post("/", async (req, res) => {
  try {
    const { bloodGroup, unitsAvailable } = req.body;

    const bloodStock = await BloodStock.findOneAndUpdate(
      { bloodGroup },
      {
        bloodGroup,
        unitsAvailable,
        lastUpdated: new Date(),
      },
      {
        new: true,
        upsert: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      message: "Blood stock updated successfully",
      bloodStock,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to update blood stock",
      error: error.message,
    });
  }
});

module.exports = router;