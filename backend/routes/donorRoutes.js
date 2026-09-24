const express = require("express");
const bcrypt = require("bcryptjs");
const Donor = require("../models/Donor");

const router = express.Router();



// Register a new donor
router.post("/register", async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      dateOfBirth,
      gender,
      bloodGroup,
      city,
      address,
      lastDonationDate,
      password,
    } = req.body;

    // Check if email already exists
    const existingDonor = await Donor.findOne({ email });

    if (existingDonor) {
      return res.status(400).json({
        message: "Email is already registered",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create donor
    const donor = new Donor({
      fullName,
      email,
      phone,
      dateOfBirth,
      gender,
      bloodGroup,
      city,
      address,
      lastDonationDate,
      password: hashedPassword,
    });

    const savedDonor = await donor.save();

    res.status(201).json({
      message: "Donor registered successfully",
      donor: {
        id: savedDonor._id,
        fullName: savedDonor.fullName,
        email: savedDonor.email,
        bloodGroup: savedDonor.bloodGroup,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: "Donor registration failed",
      error: error.message,
    });
  }
});

// Find donors by blood group and city
router.get("/", async (req, res) => {
  try {
    const { bloodGroup, city } = req.query;

    const filter = {};

    if (bloodGroup) {
      filter.bloodGroup = bloodGroup;
    }

    if (city) {
      filter.city = {
        $regex: city,
        $options: "i",
      };
    }

    const donors = await Donor.find(filter).select(
      "fullName bloodGroup city phone"
    );

    res.status(200).json(donors);
  } catch (error) {
    res.status(500).json({
      message: "Failed to find donors",
      error: error.message,
    });
  }
});

module.exports = router;