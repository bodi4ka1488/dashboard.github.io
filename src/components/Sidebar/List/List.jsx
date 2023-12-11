import React from "react";
import "./style.css";
export const List = () => {
  const menuItems = [
    { name: "Dashboard" },
    { name: "Product" },
    { name: "Customers", active: true },
    { name: "Income" },
    { name: "Promote" },
    { name: "Help" },
  ];
  return (
    <ul className="sidebar_list">
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={`sidebar_list-item ${item.active ? "--active" : ""}`}
        >
          <div className="sidebar_list-content">
            <img
              className="sidebar_list-icons"
              src={`/src/img/${index + 1}.svg`}
              alt=""
            />
            <p className="sidebar_list-name">{item.name}</p>
          </div>
          {index > 0 && (
            <img
              className="sidebar_list-arrow"
              src="/src/img/Vector.svg"
              alt=""
            />
          )}
        </li>
      ))}
    </ul>
  );
};
