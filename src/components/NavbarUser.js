import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import '../styles/Navbar.css';

const NavbarUser = () => {
  const { logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="logo">InvoiceGen</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <button onClick={logout} className="logout-button">Logout</button>
      </div>
    </nav>
  );
};

export default NavbarUser;
