import React from "react";
import Wrapper from "./styled/ProductReward.styled";
import { useProductContext } from "../../context/ProductContext";
import { useState } from "react";
import { useEffect } from "react";

const ProductReward = ({
  title,
  text,
  total,
  pledge,
  modal,
  initial,
  chooseReward,
  id,
  choosen,
  onFullfiled,
}) => {
  const { toggleModal, finishModal, totalAsked, totalRecieved } =
    useProductContext();

  const [selectPledge, setSelectPledge] = useState(false);
  const [customPledge, setCustomPledge] = useState(0);

  const onSubmit = () => {
    if (!selectPledge && customPledge <= 0) {
      toggleModal();
      return;
    }
    finishModal(selectPledge, customPledge, pledge, title);
    onFullfiled();
  };

  const onSelectPledge = () => {
    setSelectPledge((prev) => !prev);
  };

  useEffect(() => {
    if (customPledge > 0) {
      setSelectPledge(false);
    }
  }, [customPledge]);

  return (
    <Wrapper
      className={
        modal
          ? choosen
            ? "modal-reward chosen"
            : total <= 0
            ? "modal-reward disable"
            : "modal-reward"
          : ""
      }
    >
      <div className="reward__header">
        {modal ? (
          <button
            onClick={() => {
              if (total <= 0) {
                return;
              }

              chooseReward(id);
            }}
            className="check-circle"
          ></button>
        ) : null}
        <h5>{title}</h5>
        {initial ? null : <span>Pledge ${pledge} or more</span>}
      </div>
      <p className="reward__text">{text}</p>
      {choosen ? (
        <div className="cta">
          <input
            type="number"
            placeholder="Enter your pledge"
            // value={customPledge}
            onChange={(e) => {
              setCustomPledge(e.target.value);
            }}
            disabled={selectPledge}
            value={customPledge}
            className={
              !selectPledge
                ? customPledge > 0
                  ? "btn btn-select select"
                  : "btn btn-select"
                : "btn btn-select pledge"
            }
          />
          <div className="btns-container">
            {pledge ? (
              <button
                onClick={onSelectPledge}
                className={
                  selectPledge ? "btn btn-select select" : "btn btn-select"
                }
              >
                ${pledge}
              </button>
            ) : null}
            <button
              className="btn btn-cyan"
              onClick={() => {
                onSubmit();
              }}
            >
              Continue
            </button>
          </div>
        </div>
      ) : null}
      <div className="reward__footer">
        {modal ? null : (
          <h6>
            <span>{total}</span>left
          </h6>
        )}

        {modal ? null : (
          <button
            className="btn btn-cyan"
            disabled={total <= 0}
            onClick={() => {
              if (total <= 0) {
                return;
              }
              toggleModal();
            }}
          >
            {total > 0 ? "Select Reward" : "Out of stock"}
          </button>
        )}
      </div>
    </Wrapper>
  );
};

export default ProductReward;
