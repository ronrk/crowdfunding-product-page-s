import styled from "styled-components";

const ProductWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;

  & .product__body {
    background-color: #fff;
    margin: 2rem 0;
    border-radius: 6px;
    box-shadow: var(--box-shadow-light);
    padding: 2rem 6rem;
  }

  @media screen and (max-width: 700px) {
    width: 90%;
  }
  @media screen and (max-width: 500px) {
    width: 95%;
  }
`;

export default ProductWrapper;
