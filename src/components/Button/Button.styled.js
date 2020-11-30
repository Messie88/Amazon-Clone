import styled from "styled-components";

export const Container = styled.button`
  background: #ff9900;
  color: white;
  min-width: 150px;
  max-height: 50px;
  padding: 10px 20px;
  border: none;
  text-transform: uppercase;
  margin-top: 0px;
  cursor: pointer;
  transition: 0.3s all ease-in;
  max-width: 250px;
  outline: none;

  &:hover {
    background: #ff8800;
  }
`;
