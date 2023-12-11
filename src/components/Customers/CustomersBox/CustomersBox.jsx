import React from "react";
import { Header } from "./Header/Header";
import { Table } from "./Table/Table";
import "./style.css";
import { Footer } from "./Footer/Footer";
export const CustomersBox = () => {
  return (
    <div className="customersBox">
      <Header />
      <Table />
      <Footer />
    </div>
  );
};
