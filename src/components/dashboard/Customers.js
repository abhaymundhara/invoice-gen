import React from "react";

const customers = [
  { name: "Patricia Craig", value: "$3,240" },
  { name: "Harold Gray", value: "$275" },
  { name: "Alfred Hughes", value: "$840" },
];

const Customers = () => (
  <div className="card">
    <h3>Customers</h3>
    <p style={{ fontSize: "1.3rem", fontWeight: "bold" }}>1,280</p>
    <ul>
      {customers.map((c) => (
        <li key={c.name}>{c.name} - {c.value}</li>
      ))}
    </ul>
  </div>
);

export default Customers;
