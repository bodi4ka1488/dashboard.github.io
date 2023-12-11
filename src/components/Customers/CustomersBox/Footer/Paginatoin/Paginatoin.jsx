import React from "react";
import "./style.css";
export const Paginatoin = () => {
  return (
    <div className="customersBox_footer-pagination">
      <div className="customersBox_footer-pagination-item">{"<"}</div>
      <div className="customersBox_footer-pagination-item --active">1</div>
      <div className="customersBox_footer-pagination-item">2</div>
      <div className="customersBox_footer-pagination-item">3</div>
      <div className="customersBox_footer-pagination-item">4</div>
      <div className="customersBox_footer-pagination-item">...</div>
      <div className="customersBox_footer-pagination-item">40</div>
      <div className="customersBox_footer-pagination-item">{">"}</div>
    </div>
  );
};
