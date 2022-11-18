import styled from "styled-components";

const ModalDefaultWrapper = styled.div`
  border-radius: 6px;
  background-color: #fff;
  padding: 5rem 7rem;
  width: 55%;
  height: 100%;
  position: fixed;
  top: 5rem;
  overflow-y: scroll;
  & .icon-close  {
  margin-left: auto;
    /* width: 100%; */
    position: absolute;
    right: 5rem;
    top: 3rem;
    cursor: pointer;
  }
  & .icon-close g {
    fill: black;
    d
  }
  @media screen and (max-width: 1000px) {
    width: 80%;
  }
  @media screen and (max-width: 700px) {
    width: 90%;
  }
  @media screen and (max-width: 600px) {
    width: 95%;
  }
  & h3 {
    font-size: 3rem;
    font-family: var(--font);
    color: var(--black);
    margin-bottom: 2rem;
  }
  & p {
    font-size: 1.5rem;
    font-family: var(--font);
    color: var(--dark-gray);
    margin-bottom: 4rem;
  }
  & .modal-reward.disable {
    font-size: 10rem;
    opacity: 0.6;
  }
  & .modal-reward.chosen {
    border: 3px solid var(--moderate-cyan);

    & .check-circle {
      /* position: relative; */
      display: flex;
      justify-content: center;
      align-items: center;

      &::before {
        content: "";
        /* position: absolute; */
        display: block;
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 50%;
        background-color: var(--moderate-cyan);
        left: 0;
        top: 0;
      }
    }
    & .cta {
      border-top: 1px solid var(--dark-gray);
      padding-top: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      & input {
        background: none;
        border: none;
        color: var(--dark-gray);
        font-family: var(--font);
        font-size: 1.4rem;
        padding: 0.6rem 2rem;
        width: 150px;
        max-width: 30%;
        transition: all 0.8s;
        border-radius: 100px;
        &.select {
          background-color: var(--moderate-cyan);
          color: #fff;
        }
        &.pledge {
          background-color: var(--dark-gray);
          color: var(--dark-gray);
        }

        &:focus {
          outline: 0;
          border: 2px solid var(--dark-cyan);
          border-radius: 100px;
          width: 200px;
          color: var(--dark-gray);
          background-color: transparent;
        }
      }
      & .btns-container {
        display: flex;
        align-items: center;
        .btn-cyan {
          padding: 0.9rem 2rem;
        }
        .btn-select {
          border: 1px solid var(--dark-gray);
          padding: 0.9rem 2rem;
          border-radius: 100px;
          margin-right: 1rem;
          font-weight: 600;
          transition: all 0.2s;
          &.select {
            background-color: var(--moderate-cyan);
            border-color: var(--moderate-cyan);
            color: #fff;
            filter: brightness(120%);
          }
          &:hover {
            background-color: var(--moderate-cyan);
            color: #fff;
            border-color: var(--moderate-cyan);
          }
          &:active {
            transform: scale(0.98);
          }
        }
      }
    }
  }
  & .modal-reward {
    /* flex-direction: row;
    display: flex; */
    & .reward__header {
      justify-content: flex-start;

      & h5 {
        margin-right: 3rem;
      }
    }
    & .check-circle {
      height: 3rem;
      width: 3rem;
      margin-left: -3rem;
      margin-right: 1rem;
      border: 1px solid var(--dark-gray);
      border-radius: 50%;
      background-color: transparent;
      cursor: pointer;
      /* display: flex; */
      /* justify-content: center; */
      /* align-items: center; */
    }
  }
`;

export default ModalDefaultWrapper;
