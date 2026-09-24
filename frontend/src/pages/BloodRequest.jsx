import { useState } from "react";
import "./BloodRequest.css";

function BloodRequest() {
  const [formData, setFormData] = useState({
    patientName: "",
    phone: "",
    bloodGroup: "A+",
    unitsRequired: "",
    hospital: "",
    city: "",
    urgency: "Normal",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/blood-requests",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            unitsRequired: Number(formData.unitsRequired),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to submit blood request");
        return;
      }

      alert("Blood request submitted successfully!");

      setFormData({
        patientName: "",
        phone: "",
        bloodGroup: "A+",
        unitsRequired: "",
        hospital: "",
        city: "",
        urgency: "Normal",
      });
    } catch (error) {
      console.error("Error submitting blood request:", error);
      alert("Unable to connect to backend");
    }
  };

  return (
    <div className="blood-request-page">
      <div className="blood-request-container">
        <h1>Request Blood</h1>

        <p>
          Submit your blood requirement and our system will help
          connect you with available blood resources.
        </p>

        <form onSubmit={handleSubmit}>
          <label>Patient Name</label>
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            placeholder="Enter patient name"
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
          />

          <label>Blood Group</label>
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
          >
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>

          <label>Units Required</label>
          <input
            type="number"
            name="unitsRequired"
            min="1"
            value={formData.unitsRequired}
            onChange={handleChange}
            placeholder="Enter number of units"
            required
          />

          <label>Hospital</label>
          <input
            type="text"
            name="hospital"
            value={formData.hospital}
            onChange={handleChange}
            placeholder="Enter hospital name"
            required
          />

          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter city"
            required
          />

          <label>Urgency</label>
          <select
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
          >
            <option>Normal</option>
            <option>Urgent</option>
            <option>Emergency</option>
          </select>

          <button type="submit">
            Submit Blood Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default BloodRequest;
