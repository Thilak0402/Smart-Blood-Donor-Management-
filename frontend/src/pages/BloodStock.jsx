import { useEffect, useState } from "react";
import "./BloodStock.css";

function BloodStock() {
  const [bloodStock, setBloodStock] = useState([]);
  const [bloodGroup, setBloodGroup] = useState("A+");
  const [unitsAvailable, setUnitsAvailable] = useState("");

  const fetchBloodStock = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/blood-stock");
      const data = await response.json();
      setBloodStock(data);
    } catch (error) {
      console.error("Error fetching blood stock:", error);
    }
  };

  useEffect(() => {
    fetchBloodStock();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      console.error("Error updating blood stock:", error);
      alert("Unable to connect to backend");
    }
  };

  return (
    <div className="blood-stock-page">
      <h1>Blood Stock Management</h1>

      <form className="stock-form" onSubmit={handleSubmit}>
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

        <input
          type="number"
          min="0"
          placeholder="Units Available"
          value={unitsAvailable}
          onChange={(e) => setUnitsAvailable(e.target.value)}
          required
        />

        <button type="submit">Update Stock</button>
      </form>

      <div className="blood-stock-grid">
        {bloodStock.length === 0 ? (
          <p>No blood stock data available.</p>
        ) : (
          bloodStock.map((stock) => (
            <div className="blood-card" key={stock._id}>
              <h2>{stock.bloodGroup}</h2>
              <p>{stock.unitsAvailable} Units Available</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BloodStock;