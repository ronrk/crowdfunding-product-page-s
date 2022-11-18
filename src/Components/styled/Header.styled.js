import styled from "styled-components";
import bgBig from "../../assets/images/image-hero-desktop.jpg";

const HeaderWrapper = styled.header`
  height: 50vh;
  background-image: url(${bgBig});
  background-repeat: no-repeat;
  background-size: cover;
  /* position: relative; */
  z-index: 1;

  & .header__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 10rem;
    @media screen and (max-width: 700px) {
      padding: 4rem;
    }
  }

  & .nav__logo {
    display: block;
    width: 15rem;
  }
  & .menu-btn {
    display: none;
    cursor: pointer;
  }
  & .nav__links {
    display: flex;
    list-style: none;
    & li {
      padding: 0 2rem;
      & a {
        display: block;
        text-decoration: none;
        font-size: 1.8rem;
        color: #fff;
        font-family: var(--font);
        transition: transform 0.2s;
        &:hover {
          transform: translateY(2px);
        }
      }
    }
  }

  @media screen and (max-width: 700px) {
    & .nav__links {
      display: none;
    }
    & .menu-btn {
      display: block;
    }
  }
`;

export default HeaderWrapper;
