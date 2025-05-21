import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const NavbarGuest = () => (
  <nav className="navbar">
    <div className="logo">InvoiceGen</div>
    <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/login" className="nav-button">Login</Link>
    </div>
  </nav>
);

export default NavbarGuest;
