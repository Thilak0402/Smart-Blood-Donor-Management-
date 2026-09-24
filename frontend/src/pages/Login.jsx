import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Login failed");
        return;
      }

      // Save logged-in donor information
      localStorage.setItem(
        "donor",
        JSON.stringify(data.donor)
      );

      alert("Login successful!");

      // Go to donor dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      alert("Unable to connect to backend");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Donor Login</h1>

        <p>Login to access your SmartBlood dashboard.</p>

        <form onSubmit={handleSubmit}>
          <label>Email</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <label>Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />

          <button type="submit">
            Login
          </button>
        </form>

        <div className="login-register">
          <p>
            Don't have an account?{" "}
            <Link to="/register">
              Register as a Donor
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;