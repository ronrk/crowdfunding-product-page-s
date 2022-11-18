import React, { useState } from "react";
import Wrapper from "./styled/ModalDefault.styled";
import ProductReward from "../Product/ProductReward";
import { ReactComponent as IconClose } from "../../assets/images/icon-close-menu.svg";
import { useProductContext } from "../../context/ProductContext";

const ModalDefault = ({ onFullfiled }) => {
  const { rewards, toggleModal } = useProductContext();
  const [active, setActive] = useState(null);

  const chooseReward = (id) => {
    setActive(id);
  };

  return (
    <Wrapper>
      <IconClose className="icon-close" onClick={toggleModal} />
      <h3>Back this project</h3>
      <p>
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>
      <ProductReward
        title="Pledge with no reward"
        text="Choose to support us withoud a reward if you simply belive in our project. As a backer, you will be signed up to receive product updated via email."
        modal={true}
        initial={true}
        id={-1}
        chooseReward={chooseReward}
        choosen={active === -1 ? true : false}
        onFullfiled={onFullfiled}
      />
      {rewards.map((item, i) => (
        <ProductReward
          choosen={active === i ? true : false}
          chooseReward={chooseReward}
          id={i}
          key={i}
          {...item}
          modal={true}
          onFullfiled={onFullfiled}
        />
      ))}
    </Wrapper>
  );
};

export default ModalDefault;
