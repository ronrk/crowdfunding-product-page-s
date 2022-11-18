import React, { useContext, useReducer, useState } from "react";
import reducer from "../reducers/product_reducer";

const initialState = {
  bookmark: false,
  totalAsked: 100000,
  totalRecieved: 89914,
  totalBacked: 5007,
  daysLeft: 56,
  rewards: [
    {
      title: "Bamboo Stand",
      text: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      total: 101,
      pledge: 25,
    },
    {
      title: "Black Edition Stand",
      text: `You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
      member list. Shipping is included.`,
      total: 64,
      pledge: 75,
    },
    {
      title: "Mahogany Special Edition",
      text: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
      to our Backer member list. Shipping is included.`,
      total: 0,
      pledge: 200,
    },
  ],
};

const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const bookmarkProject = () => {
    dispatch({ type: "BOOKMARK" });
  };

  const unBookProject = () => {
    dispatch({ type: "UNBOOK" });
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const finishModal = (selectPledge, customPledge, pledge, title) => {
    if (selectPledge) {
      dispatch({ type: "PLEDGE", payload: { total: Number(pledge), title } });
    } else {
      dispatch({
        type: "PLEDGE",
        payload: { total: Number(customPledge), title },
      });
    }
  };

  return (
    <ProductContext.Provider
      value={{
        ...state,
        bookmarkProject,
        unBookProject,
        isModalOpen,
        toggleModal,
        finishModal,
        isMenuOpen,
        toggleMenu,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export const useProductContext = () => {
  return useContext(ProductContext);
};
