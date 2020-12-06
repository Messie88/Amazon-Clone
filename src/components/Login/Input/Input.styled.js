import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  input {
    padding: 10px;
    border: 1px solid #ff9900;
    outline: none;
    z-index: 2;
    background: transparent;

    &:focus ~ label {
      top: -10px;
      transition: all 0.3s ease-in-out;
      font-size: 0.8rem;
      color: #ff9900;
      font-weight: bolder;
      background: white;
      z-index: 3;
    }

    &:valid ~ label {
      top: -10px;
      transition: all 0.3s ease-in-out;
      font-size: 0.8rem;
      color: #ff9900;
      font-weight: bolder;
      background: white;
      z-index: 3;
    }
  }

  label {
    position: absolute;
    top: 7px;
    margin-left: 10px;
    padding: 0 5px;
    color: gray;
    z-index: 1;
  }
`;
