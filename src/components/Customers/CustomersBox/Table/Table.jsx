import React from "react";
import { TableHeader } from "./TableHeader/TableHeader";
import "./style.css";
import { TableContent } from "./TableContent/TableContent";
export const Table = () => {
  return (
    <div className="customersBox_table">
      <TableHeader />
      <TableContent />
    </div>
  );
};
