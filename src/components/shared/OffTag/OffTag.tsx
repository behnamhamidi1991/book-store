import React from "react";
import "./offtag.css";

const OffTag = () => {
  return (
    <div className="off-sign-wrapper">
      <div className="off-sign-display">
        <div className="off-sign-time">
          <div className="off-sign-text">
            <div className="off-sign-percentage">50%</div>
            <p className="off-text"> شامل تمامی کتاب های درسی و تخصصی</p>
          </div>
        </div>
      </div>
      <span></span>
    </div>
  );
};

export default OffTag;
