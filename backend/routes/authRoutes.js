const express = require("express");
const bcrypt = require("bcryptjs");
const Donor = require("../models/Donor");

const router = express.Router();

// Donor Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find donor by email
    const donor = await Donor.findOne({ email });

    if (!donor) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, donor.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // Login successful
    res.status(200).json({
      message: "Login successful",
      donor: {
        id: donor._id,
        fullName: donor.fullName,
        email: donor.email,
        bloodGroup: donor.bloodGroup,
        city: donor.city,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Login failed",
      error: error.message,
    });
  }
});

module.exports = router;