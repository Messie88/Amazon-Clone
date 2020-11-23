import styled from "styled-components";

export const Container = styled.button`
  background: #ff9900;
  color: white;
  padding: 10px 20px;
  border: none;
  text-transform: uppercase;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.3s all ease-in;
  max-width: 250px;
  outline: none;

  &:hover {
    background: #ff8800;
  }
`;
