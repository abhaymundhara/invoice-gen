import React from "react";

const StatCard = ({ label, date, value, bgColor }) => {
  return (
    <div className="stat-card" style={{ backgroundColor: bgColor }}>
      <div className="stat-label">{label}</div>
      <div className="stat-date">{date}</div>
      <div className="stat-value">{value}</div>
    </div>
  );
};

export default StatCard;
