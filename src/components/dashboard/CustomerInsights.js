// src/components/dashboard/CustomerInsights.js
import React from "react";
import "../../styles/DashboardCard.css";

const customers = [
  {
    name: "Alice Johnson",
    email: "alice@brighttech.com",
    totalSpent: "$8,400",
    orders: 12,
  },
  {
    name: "Bob Williams",
    email: "bob@novasoft.io",
    totalSpent: "$5,600",
    orders: 8,
  },
  {
    name: "Clara Smith",
    email: "clara@pixelcraft.net",
    totalSpent: "$3,200",
    orders: 5,
  },
];

const CustomerInsights = () => {
  return (
    <div className="card customer-insights">
      <h3>Customer Insights</h3>
      <ul className="customer-list">
        {customers.map((c, index) => (
          <li key={index} className="customer-item">
            <div className="customer-name">{c.name}</div>
            <div className="customer-email">{c.email}</div>
            <div className="customer-data">
              <span>{c.orders} orders</span> • <span>{c.totalSpent} total</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerInsights;
