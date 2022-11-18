import styled from "styled-components";

const MenuWrapper = styled.nav`
  position: absolute;
  width: 80%;
  /* margin: 10rem 20rem; */
  background-color: #fff;
  z-index: 100;
  top: 9rem;
  left: 50%;
  /* transform: translateX(-50%); */
  border-radius: 6px;
  transform: translateX(50%);
  height: 0;
  display: none;

  &.show {
    transform: translateX(-50%);
    height: auto;
    @media screen and (max-width: 700px) {
      display: block;
    }
  }
  & ul {
    list-style: none;
    & li {
      padding: 2rem 4rem;
      margin: 2rem 0;
      &:not(:last-of-type) {
        border-bottom: 0.5px solid var(--dark-cyan);
      }
    }
    & li a {
      text-decoration: none;
      font-family: var(--font);
      font-size: 2.3rem;
      color: var(--black);
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default MenuWrapper;
