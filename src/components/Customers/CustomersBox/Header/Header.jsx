import React from "react";
import "./style.css";

export const Header = () => {
  return (
    <div className="customersBox_header">
      <div className="customersBox_header-text">
        <p>All Customers</p>
        <span>Active Members</span>
      </div>
      <div className="customersBox_header-search">
        <span className="customersBox_header-search-icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="#7E7E7E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 21L16.65 16.65"
              stroke="#7E7E7E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};
