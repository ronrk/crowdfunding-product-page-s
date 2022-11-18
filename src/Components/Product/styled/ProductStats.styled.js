import styled from "styled-components";

const ProductStatsWrapper = styled.div`
  padding: 2rem 5rem;
  align-self: stretch;
  /* justify-content: center; */
  margin: 2rem 0;
  background-color: #fff;
  box-shadow: var(--box-shadow-light);
  border-radius: 6px;

  & .stats-container {
    display: flex;
    margin-bottom: 2rem;

    @media screen and (max-width: 900px) {
      flex-wrap: wrap;
    }

    @media screen and (max-width: 750px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & .stats__box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &:not(:last-of-type) {
          margin: 0;
          padding: 0;
          border: 0;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--dark-gray);
        }
      }
    }
  }

  & .stats__box {
    &:not(:last-of-type) {
      margin-right: 7rem;
      border-right: 1px solid var(--dark-gray);
      padding-right: 5rem;
    }

    & h3 {
      font-family: var(--font);
      font-size: 3.8rem;
      margin-bottom: 1rem;
    }
    & span {
      font-family: var(--font);
      font-size: 1.4rem;
      color: var(--dark-gray);
    }
  }
  & .process-bar {
    width: 100%;
    height: 3rem;
    border-radius: 1000px;
    background-color: var(--dark-gray);
    position: relative;

    &::before {
      position: absolute;
      content: "";
      width: ${({ process }) => process + "%"};
      height: 3rem;
      background-color: var(--dark-cyan);
      border-radius: 1000px;
    }
  }
`;

export default ProductStatsWrapper;
