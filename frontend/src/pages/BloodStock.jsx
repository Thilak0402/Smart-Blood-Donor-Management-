import { useEffect, useState } from "react";
import "./BloodStock.css";

function BloodStock() {
  const [bloodStock, setBloodStock] = useState([]);
  const [bloodGroup, setBloodGroup] = useState("A+");
  const [unitsAvailable, setUnitsAvailable] = useState("");

  const bloodGroups = [
    "A+",
    "A-",
    "B+",
    "B-",
    "AB+",
    "AB-",
    "O+",
    "O-",
  ];

  const fetchBloodStock = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/blood-stock"
      );

      const data = await response.json();

      if (response.ok) {
        setBloodStock(data);
      } else {
        console.error("Failed to fetch blood stock");
      }
    } catch (error) {
      console.error("Blood stock error:", error);
    }
  };

  useEffect(() => {
    fetchBloodStock();
  }, []);

  const handleUpdateStock = async (e) => {
    e.preventDefault();

    if (unitsAvailable === "" || Number(unitsAvailable) < 0) {
      alert("Please enter a valid number of units.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/blood-stock",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            bloodGroup,
            unitsAvailable: Number(unitsAvailable),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to update blood stock");
        return;
      }

      alert("Blood stock updated successfully!");

      setUnitsAvailable("");

      fetchBloodStock();
    } catch (error) {
      console.error("Update stock error:", error);
      alert("Unable to connect to backend");
    }
  };

  return (
    <div className="blood-stock-page">
      <div className="blood-stock-container">

        <div className="blood-stock-header">
          <div className="blood-stock-icon">
            🩸
          </div>

          <h1>Blood Stock Management</h1>

          <p>
            View and manage the available blood stock.
          </p>
        </div>

        <div className="stock-update-card">
          <h2>Update Blood Stock</h2>

          <form
            className="stock-update-form"
            onSubmit={handleUpdateStock}
          >
            <div className="stock-form-group">
              <label htmlFor="bloodGroup">
                Blood Group
              </label>

              <select
                id="bloodGroup"
                value={bloodGroup}
                onChange={(e) =>
                  setBloodGroup(e.target.value)
                }
              >
                {bloodGroups.map((group) => (
                  <option
                    key={group}
                    value={group}
                  >
                    {group}
                  </option>
                ))}
              </select>
            </div>

            <div className="stock-form-group">
              <label htmlFor="unitsAvailable">
                Units Available
              </label>

              <input
                id="unitsAvailable"
                type="number"
                min="0"
                value={unitsAvailable}
                onChange={(e) =>
                  setUnitsAvailable(e.target.value)
                }
                placeholder="Enter units"
                required
              />
            </div>

            <button
              type="submit"
              className="stock-update-button"
            >
              Update Stock
            </button>
          </form>
        </div>

        <div className="stock-section">

          <div className="stock-section-header">
            <h2>Available Blood Stock</h2>

            <span className="stock-count">
              {bloodStock.length} Blood Groups
            </span>
          </div>

          <div className="blood-stock-grid">
            {bloodStock.map((stock) => (
              <div
                className="blood-stock-card"
                key={stock._id || stock.bloodGroup}
              >
                <div className="blood-group-circle">
                  {stock.bloodGroup}
                </div>

                <h3>{stock.bloodGroup}</h3>

                <p className="units-number">
                  {stock.unitsAvailable}
                </p>

                <p className="units-label">
                  Units Available
                </p>

                <div
                  className={`stock-status ${
                    stock.unitsAvailable === 0
                      ? "out-of-stock"
                      : stock.unitsAvailable <= 5
                      ? "low-stock"
                      : "available"
                  }`}
                >
                  {stock.unitsAvailable === 0
                    ? "Out of Stock"
                    : stock.unitsAvailable <= 5
                    ? "Low Stock"
                    : "Available"}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}

export default BloodStock;