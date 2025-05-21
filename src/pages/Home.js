// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <main className="hero">
        <h1>Simplify invoicing<br />for your business.</h1>
        <p>Effortlessly automate, track and send recurring invoices—all from one place.</p>
        <Link to="/dashboard" className="cta-button">Go to Dashboard</Link>
      </main>

      <section className="features">
  <div className="feature-card">
    <h3><span role="img" aria-label="mobile">📱</span> Access anywhere</h3>
    <p>Your data is stored securely in the cloud. Work from any device.</p>
  </div>
  <div className="feature-card">
    <h3><span role="img" aria-label="chart">📊</span> Track cash flow</h3>
    <p>Send quotes, get paid faster, and track every transaction.</p>
  </div>
  <div className="feature-card">
    <h3><span role="img" aria-label="insight">📈</span> Smarter insights</h3>
    <p>Get detailed reports to help grow your business confidently.</p>
  </div>
</section>


      <section className="plans">
        <h2>Choose a plan to suit your business</h2>
        <div className="plan-grid">
          <div className="plan-card">
            <h3>Starter</h3>
            <p className="price">₹499/mo</p>
            <ul>
              <li>Up to 50 invoices</li>
              <li>Email support</li>
              <li>Basic reports</li>
            </ul>
            <button>Select Plan</button>
          </div>
          <div className="plan-card recommended">
            <h3>Pro</h3>
            <p className="price">₹899/mo</p>
            <ul>
              <li>Unlimited invoices</li>
              <li>Priority support</li>
              <li>Advanced reports</li>
            </ul>
            <button>Select Plan</button>
          </div>
          <div className="plan-card">
            <h3>Enterprise</h3>
            <p className="price">₹1499/mo</p>
            <ul>
              <li>Custom branding</li>
              <li>Multiple users</li>
              <li>Dedicated manager</li>
            </ul>
            <button>Select Plan</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        © 2025 InvoiceGen. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
