// src/components/Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";
import { FaChartPie, FaFileInvoice, FaExchangeAlt, FaCreditCard, FaHeadphones } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
            <FaChartPie className="icon" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/invoice" className={({ isActive }) => isActive ? 'active' : ''}>
            <FaFileInvoice className="icon" />
            Invoice
          </NavLink>
        </li>
        <li>
          <NavLink to="/transactions" className={({ isActive }) => isActive ? 'active' : ''}>
            <FaExchangeAlt className="icon" />
            Transactions
          </NavLink>
        </li>
        <li>
          <NavLink to="/payment" className={({ isActive }) => isActive ? 'active' : ''}>
            <FaCreditCard className="icon" />
            Payment
          </NavLink>
        </li>
      </ul>
      <div className="sidebar-bottom">
        <NavLink to="/support" className={({ isActive }) => isActive ? 'active' : ''}>
          <FaHeadphones className="icon" />
          Support
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
