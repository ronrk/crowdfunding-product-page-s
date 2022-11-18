import React from "react";
import ProductHeader from "./ProductHeader";
import ProductStats from "./ProductStats";
import ProductInfo from "./ProductInfo";
import ProductReward from "./ProductReward";
import Wrapper from "./styled/Product.styled";

import { useProductContext } from "../../context/ProductContext";

const Product = () => {
  const { rewards } = useProductContext();

  return (
    <Wrapper>
      <ProductHeader />
      <ProductStats />
      <div className="product__body">
        <ProductInfo />
        {rewards.map((item, i) => (
          <ProductReward key={i} {...item} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Product;
