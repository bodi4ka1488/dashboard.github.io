import React from "react";
import "./style.css";

export const TableHeader = () => {
  const cellNames = [
    { name: "Customer Name" },
    { name: "Company" },
    { name: "Phone Number" },
    { name: "Email" },
    { name: "Country" },
    { name: "Status" },
  ];
  return (
    <div className="customersBox_table-header">
      {cellNames.map((item, index) => (
        <div key={index} className="customersBox_table-header-cell">
          {item.name}
        </div>
      ))}
    </div>
  );
};
