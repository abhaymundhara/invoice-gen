// src/pages/Dashboard.js
import React from "react";
import "../styles/Dashboard.css";

import SalesOverview from "../components/dashboard/SalesOverview";
import Orders from "../components/dashboard/Orders";
import Inventory from "../components/dashboard/Inventory";
import Invoices from "../components/dashboard/Invoices";
import Customers from "../components/dashboard/Customers";
import Notifications from "../components/dashboard/Notifications";
import PerformanceMetrics from "../components/dashboard/PerformanceMetrics";
import SettingsTools from "../components/dashboard/SettingsTools";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard Overview</h1>
      <div className="dashboard-grid">
        <SalesOverview />
        <Orders />
        <Inventory />
        <Invoices />
        <Customers />
        <Notifications />
        <PerformanceMetrics />
        <SettingsTools />
      </div>
    </div>
  );
};

export default Dashboard;
