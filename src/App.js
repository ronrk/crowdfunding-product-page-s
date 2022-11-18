import React, { useState } from "react";
import Header from "./Components/Header";
import Product from "./Components/Product/Product";
import Modal from "./Components/Modal/Modal";
import Menu from "./Components/Menu";
import { useProductContext } from "./context/ProductContext";

const App = () => {
  const { isModalOpen } = useProductContext();

  return (
    <div className={isModalOpen ? "app-container modal" : "app-container"}>
      <main>
        <Header />
        <Product />
      </main>

      {isModalOpen ? <Modal /> : null}
    </div>
  );
};

export default App;
