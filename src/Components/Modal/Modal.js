import React, { useState } from "react";
import Wrapper from "./styled/Modal.styled";
import ModalDefault from "./ModalDefault";
import ModalCompleted from "./ModalCompleted";

import { useProductContext } from "../../context/ProductContext";

const Modal = () => {
  const { toggleModal } = useProductContext();
  const [isModalFullfiled, setIsModalFullfield] = useState(false);
  const onFullfiled = () => {
    setIsModalFullfield(true);
  };
  return (
    <Wrapper
      className="modal-wrapper"
      onClick={(e) => {
        if (e.target.classList.contains("modal-wrapper")) {
          toggleModal();
        }
      }}
    >
      {isModalFullfiled ? (
        <ModalCompleted />
      ) : (
        <ModalDefault onFullfiled={onFullfiled} />
      )}
    </Wrapper>
  );
};

export default Modal;
