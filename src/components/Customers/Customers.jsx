import React from "react";
import "./style.css";
import { CustomersBox } from "./CustomersBox/CustomersBox";

export const Customers = ({ name }) => {
  return (
    <div className="customers">
      <div className="greeting">Hello {name}👋🏼,</div>
      <CustomersBox />
    </div>
  );
};
