import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 10px;
  width: 100%;

  input {
    padding: 15px 10px;
    margin-bottom: 10px;
    border: 1px solid #ff9900;
    outline: none;

    &:focus ~ label {
      top: -10px;
      transition: all 0.3s ease-in-out;
      font-size: 0.8rem;
      color: #ff9900;
      font-weight: bolder;
    }

    &:valid ~ label {
      top: -10px;
      transition: all 0.3s ease-in-out;
      font-size: 0.8rem;
      color: #ff9900;
      font-weight: bolder;
    }
  }

  label {
    position: absolute;
    top: 12px;
    margin-left: 10px;
    background: white;
    padding: 0 5px;
    color: gray;
  }
`;
