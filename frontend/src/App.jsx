import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          🩸 SmartBlood
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#donors">Find Donors</a>
          <a href="#stock">Blood Stock</a>
          <a href="#request">Request Blood</a>
          <button className="login-btn">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="subtitle">SMART BLOOD DONOR MANAGEMENT</p>

          <h1>
            Every Drop of Blood
            <br />
            Can <span>Save a Life.</span>
          </h1>

          <p className="hero-text">
            Connect blood donors with people in need quickly and efficiently.
            Find compatible blood donors and help save lives.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              🩸 Register as Donor
            </button>

            <button className="secondary-btn">
              Find Blood
            </button>
          </div>
        </div>

        <div className="hero-card">
          <div className="blood-icon">🩸</div>
          <h2>Be a Blood Donor</h2>
          <p>
            Your donation could be someone's second chance at life.
          </p>
          <button className="card-btn">Become a Donor</button>
        </div>
      </section>

      {/* Statistics */}
      <section className="stats">
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

      {/* Blood Availability */}
      <section className="blood-section" id="stock">
        <div className="section-heading">
          <p className="subtitle">BLOOD AVAILABILITY</p>
          <h2>Check Available Blood</h2>
          <p>
            Quickly check the availability of different blood groups.
          </p>
        </div>

        <div className="blood-grid">
          {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(
            (group) => (
              <div className="blood-card" key={group}>
                <div className="blood-group">{group}</div>
                <h3>Available</h3>
                <p>Units: --</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Emergency Section */}
      <section className="emergency" id="request">
        <div>
          <p className="subtitle">EMERGENCY</p>
          <h2>Need Blood Urgently?</h2>
          <p>
            Submit a blood request and find suitable donors near you.
          </p>
        </div>

        <button className="emergency-btn">
          Request Blood
        </button>
      </section>

      {/* Footer */}
      <footer>
        <h3>🩸 SmartBlood</h3>
        <p>
          Design and Development of Smart Blood Donor Management System
        </p>
        <p>© 2026 SmartBlood. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;