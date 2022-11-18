import React from "react";
import logo from "../assets/images/logo.svg";
import Menu from "./Menu";
import Wrapper from "./styled/Header.styled";
import { ReactComponent as MenuIcon } from "../assets/images/icon-hamburger.svg";
import { ReactComponent as IconClose } from "../assets/images/icon-close-menu.svg";

import { useProductContext } from "../context/ProductContext";

const Header = () => {
  const { isMenuOpen, toggleMenu } = useProductContext();
  return (
    <Wrapper>
      {isMenuOpen ? <Menu /> : null}

      <nav className="header__nav">
        <img className="nav__logo" src={logo} alt="crowdfund" />
        <button className="menu-btn btn" onClick={toggleMenu}>
          {!isMenuOpen ? <MenuIcon /> : <IconClose />}
        </button>
        <ul className="nav__links">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Discover</a>
          </li>
          <li>
            <a href="#">Get Started</a>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Header;
