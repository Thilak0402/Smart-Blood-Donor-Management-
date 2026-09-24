const express = require("express");
const BloodRequest = require("../models/BloodRequest");

const router = express.Router();

// Create a new blood request
router.post("/", async (req, res) => {
  try {
    const {
      patientName,
      phone,
      bloodGroup,
      unitsRequired,
      hospital,
      city,
      urgency,
    } = req.body;

    const bloodRequest = new BloodRequest({
      patientName,
      phone,
      bloodGroup,
      unitsRequired,
      hospital,
      city,
      urgency,
    });

    const savedRequest = await bloodRequest.save();

    res.status(201).json({
      message: "Blood request submitted successfully",
      bloodRequest: savedRequest,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to submit blood request",
      error: error.message,
    });
  }
});

// Get all blood requests
router.get("/", async (req, res) => {
  try {
    const requests = await BloodRequest.find().sort({
      createdAt: -1,
    });

    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch blood requests",
      error: error.message,
    });
  }
});

module.exports = router;