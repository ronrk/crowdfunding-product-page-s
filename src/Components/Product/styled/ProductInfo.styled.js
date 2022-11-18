import styled from "styled-components";

const ProductInfoWrapper = styled.div`
  font-family: var(--font);
  & h4 {
    font-size: 2rem;
    color: var(--black);
    margin-bottom: 3rem;
  }
  & p {
    font-size: 1.8rem;
    color: var(--dark-gray);
    line-height: 1.6;
    &:not(:last-of-type) {
      margin-bottom: 3rem;
    }
  }
`;

export default ProductInfoWrapper;
