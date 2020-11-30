import React from "react";
import { Container } from "./Button.styled";

const Button = ({ text, onClick, type }) => {
  return (
    <Container type={type} onClick={onClick}>
      {text}
    </Container>
  );
};

export default Button;
