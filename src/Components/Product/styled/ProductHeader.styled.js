import styled from "styled-components";

const ProductHeaderStyled = styled.div`
  border-radius: 6px;
  margin-top: -6rem;
  align-self: stretch;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 6rem;
  box-shadow: var(--box-shadow-light);
  z-index: 10;

  & .header__logo {
    margin-top: -5rem;
    margin-bottom: 1rem;
    display: block;
    width: 7rem;
  }
  & .product__title {
    font-size: 3.2rem;
    word-spacing: 5px;
    letter-spacing: 0.7px;
    font-family: var(--font);
    margin: 1rem 0;
    text-align: center;
  }
  & .product__title-text {
    font-family: var(--font);
    font-size: 1.8rem;
    color: var(--dark-gray);
    margin-bottom: 2rem;
    @media screen and (max-width: 1150px) {
      text-align: center;
    }
  }
  & .product__btns-container {
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
    @media screen and (max-width: 800px) {
      justify-content: space-around;
      & .btn-book {
        font-size: 0;
        width: 6rem;
        &:active .book-icon {
          transform: translateX(0);
        }
        & .book-icon {
          position: absolute;
          width: 7rem;
        }
      }
    }
  }
`;

export default ProductHeaderStyled;
