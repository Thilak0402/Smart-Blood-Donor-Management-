import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./DonorDashboard.css";

function DonorDashboard() {
  const [donor, setDonor] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedDonor = localStorage.getItem("donor");

    if (!storedDonor) {
      navigate("/login");
      return;
    }

    setDonor(JSON.parse(storedDonor));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("donor");
    navigate("/login");
  };

  if (!donor) {
    return <p>Loading...</p>;
  }

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div>
            <h1>Welcome, {donor.fullName}</h1>
            <p>Donor Dashboard</p>
          </div>

          <button onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>Donor Information</h3>

            <p>
              <strong>Name:</strong> {donor.fullName}
            </p>

            <p>
              <strong>Email:</strong> {donor.email}
            </p>

            <p>
              <strong>Blood Group:</strong> {donor.bloodGroup}
            </p>

            <p>
              <strong>City:</strong> {donor.city}
            </p>
          </div>

          <div className="dashboard-card">
            <h3>Quick Actions</h3>

            <Link to="/blood-stock">
              View Blood Stock
            </Link>

            <Link to="/find-donors">
              Find Donors
            </Link>

            <Link to="/request-blood">
              Request Blood
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonorDashboard;