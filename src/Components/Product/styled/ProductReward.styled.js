import styled from "styled-components";

const ProductRewardWrapper = styled.div`
  border: 1px solid var(--dark-gray);
  padding: 2.5rem 4rem;
  font-family: var(--font);
  border-radius: 8px;
  margin: 2rem 0;
  & .reward__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    & h5 {
      font-size: 1.8rem;
    }
    & span {
      font-size: 1.3rem;
      color: var(--moderate-cyan);
      font-weight: 600;
    }
  }
  & .reward__text {
    font-size: 1.3rem;
    color: var(--dark-gray);
    margin-bottom: 4rem;
  }
  & .reward__footer {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    & h6 {
      font-size: 1.3rem;
      color: var(--dark-gray);
      font-weight: 400;
      display: flex;
      align-items: center;
      & span {
        font-size: 3rem;
        font-weight: 600;
        color: var(--black);
        margin-right: 0.7rem;
      }
    }
  }
`;

export default ProductRewardWrapper;
