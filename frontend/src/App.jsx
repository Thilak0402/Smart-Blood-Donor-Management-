import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import "./App.css";

import DonorRegistration from "./pages/DonorRegistration";
import Login from "./pages/Login";
import BloodStock from "./pages/BloodStock";
import BloodRequest from "./pages/BloodRequest";
import FindDonors from "./pages/FindDonors";
import DonorDashboard from "./pages/DonorDashboard";

function Home() {
  const [bloodStock, setBloodStock] = useState([]);
  const [donor, setDonor] = useState(null);

  // Fetch blood stock
  useEffect(() => {
    const fetchBloodStock = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/blood-stock"
        );

        const data = await response.json();

        if (response.ok) {
          setBloodStock(data);
        }
      } catch (error) {
        console.error("Error fetching blood stock:", error);
      }
    };

    fetchBloodStock();
  }, []);

  // Check logged-in donor
  useEffect(() => {
    const storedDonor = localStorage.getItem("donor");

    if (storedDonor) {
      try {
        setDonor(JSON.parse(storedDonor));
      } catch (error) {
        console.error("Invalid donor data:", error);
        localStorage.removeItem("donor");
      }
    }
  }, []);

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

  const getUnits = (group) => {
    const stock = bloodStock.find(
      (item) => item.bloodGroup === group
    );

    return stock ? stock.unitsAvailable : 0;
  };

  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">🩸</span>
          <span>SmartBlood</span>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>

          <Link to="/find-donors">
            Find Donors
          </Link>

          <Link to="/blood-stock">
            Blood Stock
          </Link>

          <Link to="/request-blood">
            Request Blood
          </Link>

          {donor ? (
            <>
              <Link to="/dashboard">
                Dashboard
              </Link>

              <Link
                to="/login"
                onClick={() => {
                  localStorage.removeItem("donor");
                  setDonor(null);
                }}
              >
                Logout
              </Link>
            </>
          ) : (
            <Link to="/login">
              Login
            </Link>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Every Drop of Blood
            <br />
            Can Save a Life
          </h1>

          <p>
            Connect blood donors with people in need.
            Together, we can make a difference.
          </p>

          <div className="hero-buttons">
            <Link
              to="/register"
              className="primary-btn"
            >
              Register as Donor
            </Link>

            <Link
              to="/find-donors"
              className="secondary-btn"
            >
              Find Blood
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <div className="blood-drop">
            🩸
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="stats-section">
        <div className="stat-card">
          <h2>1,250+</h2>
          <p>Registered Donors</p>
        </div>

        <div className="stat-card">
          <h2>850+</h2>
          <p>Lives Helped</p>
        </div>

        <div className="stat-card">
          <h2>8</h2>
          <p>Blood Groups</p>
        </div>

        <div className="stat-card">
          <h2>24/7</h2>
          <p>Emergency Support</p>
        </div>
      </section>

      {/* Blood Stock Section */}
      <section className="blood-stock-section">
        <div className="section-heading">
          <h2>Current Blood Availability</h2>

          <p>
            Check the available blood units before
            requesting blood.
          </p>
        </div>

        <div className="blood-grid">
          {bloodGroups.map((group) => {
            const units = getUnits(group);

            return (
              <div
                className="blood-card"
                key={group}
              >
                <div className="blood-icon">
                  🩸
                </div>

                <h3>{group}</h3>

                {units > 0 ? (
                  <>
                    <strong>
                      {units} Units
                    </strong>

                    <span className="available">
                      Available
                    </span>
                  </>
                ) : (
                  <>
                    <strong>
                      No Stock
                    </strong>

                    <span className="unavailable">
                      Currently unavailable
                    </span>
                  </>
                )}
              </div>
            );
          })}
        </div>

        <div className="stock-button-container">
          <Link
            to="/blood-stock"
            className="view-stock-btn"
          >
            View Full Blood Stock
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="section-heading">
          <h2>How SmartBlood Works</h2>

          <p>
            Making blood donation simple and accessible.
          </p>
        </div>

        <div className="steps">
          <div className="step-card">
            <div className="step-number">
              1
            </div>

            <h3>Register</h3>

            <p>
              Register yourself as a blood donor
              by providing your basic details.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">
              2
            </div>

            <h3>Find Blood</h3>

            <p>
              Search for available donors and
              blood stock based on your requirement.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">
              3
            </div>

            <h3>Request Blood</h3>

            <p>
              Submit a blood request with hospital,
              city and urgency details.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">
              4
            </div>

            <h3>Save a Life</h3>

            <p>
              Connect donors and patients to help
              save lives when blood is needed.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="emergency-section">
        <div>
          <h2>Need Blood Urgently?</h2>

          <p>
            Find compatible blood donors quickly
            using our donor search system.
          </p>
        </div>

        <Link
          to="/find-donors"
          className="emergency-btn"
        >
          Find a Donor
        </Link>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div>
            <h3>🩸 SmartBlood</h3>

            <p>
              A smart blood donor management system
              designed to connect donors with people
              in need.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>

            <Link to="/">
              Home
            </Link>

            <Link to="/register">
              Register
            </Link>

            <Link to="/find-donors">
              Find Donors
            </Link>

            <Link to="/blood-stock">
              Blood Stock
            </Link>
          </div>

          <div>
            <h4>Services</h4>

            <Link to="/request-blood">
              Request Blood
            </Link>

            <Link to="/blood-stock">
              Blood Availability
            </Link>

            <Link to="/find-donors">
              Donor Search
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 SmartBlood. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/register"
          element={<DonorRegistration />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/blood-stock"
          element={<BloodStock />}
        />

        <Route
          path="/request-blood"
          element={<BloodRequest />}
        />

        <Route
          path="/find-donors"
          element={<FindDonors />}
        />

        <Route
          path="/dashboard"
          element={<DonorDashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;