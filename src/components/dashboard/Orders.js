import React from "react";

const Orders = () => {
  const orders = [
    { id: "0101", name: "Jane I", amount: "$3004", status: "Pending" },
    { id: "0202", name: "Johna", amount: "$2200", status: "Shipped" },
    { id: "0303", name: "John4", amount: "$1550", status: "Delivered" },
  ];

  return (
    <div className="card">
      <h3>Orders</h3>
      <p style={{ fontSize: "1.4rem", fontWeight: "bold" }}>182</p>
      <ul>
        {orders.map((o) => (
          <li key={o.id}>
            <strong>{o.id}</strong> - {o.name} - {o.amount} - {o.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
