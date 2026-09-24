import { useState } from "react";
import "./FindDonors.css";

function FindDonors() {
  const [bloodGroup, setBloodGroup] = useState("A+");
  const [city, setCity] = useState("");
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const query = new URLSearchParams();

      query.append("bloodGroup", bloodGroup);

      if (city.trim()) {
        query.append("city", city.trim());
      }

      const response = await fetch(
        `http://localhost:5000/api/donors?${query.toString()}`
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to find donors");
        return;
      }

      setDonors(data);
    } catch (error) {
      console.error("Error finding donors:", error);
      alert("Unable to connect to backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="find-donors-page">
      <div className="find-donors-container">
        <h1>Find Blood Donors</h1>

        <p>
          Search for registered donors based on blood group and city.
        </p>

        <form onSubmit={handleSearch} className="donor-search-form">
          <label>Blood Group</label>

          <select
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
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

          <label>City</label>

          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
          />

          <button type="submit">
            {loading ? "Searching..." : "Find Donors"}
          </button>
        </form>

        <div className="donor-results">
          {donors.length === 0 ? (
            <p className="no-donors">
              No donors found. Try another blood group or city.
            </p>
          ) : (
            donors.map((donor) => (
              <div className="donor-card" key={donor._id}>
                <h2>{donor.fullName}</h2>

                <p>
                  <strong>Blood Group:</strong>{" "}
                  {donor.bloodGroup}
                </p>

                <p>
                  <strong>City:</strong> {donor.city}
                </p>

                <p>
                  <strong>Phone:</strong> {donor.phone}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default FindDonors;