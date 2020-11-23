import React from "react";
import { Container } from "./Button.styled";

const Button = ({ text, onClick }) => {
  return <Container onClick={onClick}>{text}</Container>;
};

export default Button;
