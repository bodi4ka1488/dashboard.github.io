import React from "react";
import { customesModel } from "../model";
import "./style.css";
export const TableContent = () => {
  return (
    <div className="customersBox_table-content">
      {customesModel.map((item, index) => (
        <div key={index} className="customersBox_table-content-cell">
          <div>{item.name}</div>
          <div>{item.company}</div>
          <div>{item.phone}</div>
          <div>{item.email}</div>
          <div>{item.counrty}</div>
          <div>{item.status}</div>
        </div>
      ))}
    </div>
  );
};
