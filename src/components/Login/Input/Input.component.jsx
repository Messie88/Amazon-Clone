import React from "react";

import * as S from "./Input.styled";

const Input = ({ label, type, value, onChange }) => {
  return (
    <S.Container>
      <input type={type} value={value} onChange={onChange} required />
      <label htmlFor={label}>{label}</label>
    </S.Container>
  );
};

export default Input;
