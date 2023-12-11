import React from "react";
import { Paginatoin } from "./Paginatoin/Paginatoin";
import "./style.css";

export const Footer = () => {
  return (
    <div className="customersBox_footer">
      <div className="customersBox_footer-datasize">
        Showing data 1 to 8 of 256K entries
      </div>
      <Paginatoin />
    </div>
  );
};
