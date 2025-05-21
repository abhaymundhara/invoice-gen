import React from "react";

const TransactionList = ({ transactions = [] }) => {
  return (
    <div className="transaction-list">
      {transactions.length === 0 ? (
        <p>No recent transactions.</p>
      ) : (
        transactions.map((tx, idx) => (
          <div key={idx} className="transaction-item">
            <img
              src="https://via.placeholder.com/40"
              alt={tx.name}
              className="tx-avatar"
            />
            <div className="tx-info">
              <div className="tx-name">{tx.name}</div>
              <div className="tx-email">{tx.email}</div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TransactionList;
