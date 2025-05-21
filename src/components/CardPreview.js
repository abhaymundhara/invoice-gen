import React from "react";

const CardPreview = () => {
  return (
    <div className="card-preview">
      <div className="card">
        <div className="card-chip"></div>
        <div className="card-number">**** **** **** 1234</div>
        <div className="card-footer">
          <span>John Doe</span>
          <span>12/26</span>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
