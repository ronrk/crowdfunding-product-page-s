import React, { useState } from "react";
import Wrapper from "./styled/ProductHeader.styled";
import mastercraftLogo from "../../assets/images/logo-mastercraft.svg";
import { ReactComponent as IconBookmark } from "../../assets/images/icon-bookmark.svg";

import { useProductContext } from "../../context/ProductContext";

const ProductHeader = () => {
  const { bookmark, unBookProject, bookmarkProject, toggleModal } =
    useProductContext();

  const toggleBook = () => {
    if (bookmark) {
      unBookProject();
    } else {
      bookmarkProject();
    }
  };
  return (
    <Wrapper>
      <img className="header__logo" src={mastercraftLogo} alt="mastercraft" />
      <h1 className="product__title">Mastercraft Bamboo Monitor Riser</h1>
      <p className="product__title-text">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="product__btns-container">
        <button className="btn btn-cyan" onClick={toggleModal}>
          Back this project
        </button>
        <button
          onClick={toggleBook}
          className={bookmark ? "btn btn-book booked" : "btn btn-book"}
        >
          <IconBookmark className="book-icon" />
          Bookmark
        </button>
      </div>
    </Wrapper>
  );
};

export default ProductHeader;
