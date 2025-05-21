import React from "react";

const invoices = [
  { id: "#INV001", client: "BrightTech", amount: "$1,200", status: "Paid", due: "2025-05-15" },
  { id: "#INV002", client: "NovaSoft", amount: "$950", status: "Unpaid", due: "2025-05-25" },
  { id: "#INV003", client: "PixelCraft", amount: "$400", status: "Pending", due: "2025-06-01" },
];

const Invoices = () => (
  <div className="card invoices">
    <h3>Invoices & Payments</h3>
    <table className="invoice-table">
      <thead>
        <tr><th>ID</th><th>Client</th><th>Amount</th><th>Status</th><th>Due</th></tr>
      </thead>
      <tbody>
        {invoices.map((inv) => (
          <tr key={inv.id}>
            <td>{inv.id}</td>
            <td>{inv.client}</td>
            <td>{inv.amount}</td>
            <td>{inv.status}</td>
            <td>{inv.due}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Invoices;
