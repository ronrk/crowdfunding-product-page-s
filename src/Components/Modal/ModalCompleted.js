import React from "react";
import Wrapper from "./styled/ModalCompleted.styled";
import iconCheck from "../../assets/images/icon-check.svg";

import { useProductContext } from "../../context/ProductContext";

const ModalCompleted = () => {
  const { toggleModal } = useProductContext();
  return (
    <Wrapper>
      <img src={iconCheck} alt="check icon" />
      <h3>Thanks for your support!</h3>
      <p>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <button className="btn btn-cyan" onClick={toggleModal}>
        Got it!
      </button>
    </Wrapper>
  );
};

export default ModalCompleted;
