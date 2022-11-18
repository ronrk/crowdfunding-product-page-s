import styled from "styled-components";

const ModalCompletedWrapper = styled.div`
  border-radius: 6px;
  background-color: #fff;
  padding: 5rem 7rem;
  width: 40%;
  height: 60%;
  position: fixed;
  top: 5rem;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  & img {
    display: block;
    width: 20%;
    margin-bottom: 4rem;
  }
  & h3 {
    font-size: 3rem;
    font-family: var(--font);
    color: var(--black);
    margin: 2rem 0;
  }
  & p {
    font-size: 1.5rem;
    font-family: var(--font);
    color: var(--dark-gray);
    margin-bottom: 4rem;
    line-height: 1.7;
  }

  & .btn-cyan {
    padding: 1rem 2.3rem;
  }
`;

export default ModalCompletedWrapper;
