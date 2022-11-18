import React from "react";
import Wrapper from "./styled/Menu.styled";
import { useProductContext } from "../context/ProductContext";

const Menu = () => {
  const { isMenuOpen } = useProductContext();
  return (
    <Wrapper className={isMenuOpen ? "show" : null}>
      <ul className="menu__links">
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
    </Wrapper>
  );
};

export default Menu;
