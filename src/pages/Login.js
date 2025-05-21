import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import "../styles/Auth.css";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔒 Dummy login logic (replace with real one later)
    const userData = {
      email: "test@example.com",
      name: "Test User"
    };

    login(userData);         // Update context
    navigate("/");           // Redirect to homepage
  };

  return (
    <div className="auth-container">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Log In</button>
      </form>
      <p className="auth-footer">
        Don’t have an account? <Link to="/signup">Create one here</Link>
      </p>
    </div>
  );
};

export default Login;
