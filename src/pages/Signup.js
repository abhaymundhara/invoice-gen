import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import "../styles/Auth.css";

const Signup = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: "newuser@example.com",
      name: "New User"
    };

    login(userData);       // Simulate login
    navigate("/");         // Redirect to homepage
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Create Account</button>
      </form>
      <p className="auth-footer">
        Already have an account? <Link to="/login">Log in here</Link>
      </p>
    </div>
  );
};

export default Signup;
