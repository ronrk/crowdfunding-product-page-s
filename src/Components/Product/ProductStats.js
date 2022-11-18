import React from "react";
import Wrapper from "./styled/ProductStats.styled";

import { useProductContext } from "../../context/ProductContext";

const ProductStats = () => {
  const { totalAsked, totalRecieved, totalBacked, daysLeft } =
    useProductContext();
  return (
    <Wrapper process={100 / (totalAsked / totalRecieved)}>
      <div className="stats-container">
        <div className="stats__box">
          <h3>${totalRecieved}</h3>
          <span>of ${totalAsked} baced</span>
        </div>
        <div className="stats__box">
          <h3>${totalBacked}</h3>
          <span>total backers</span>
        </div>
        <div className="stats__box">
          <h3>{daysLeft}</h3>
          <span>days left</span>
        </div>
      </div>

      <div className="process-bar"></div>
    </Wrapper>
  );
};

export default ProductStats;
