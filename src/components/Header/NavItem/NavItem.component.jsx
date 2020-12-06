import React from "react";

import * as S from "./NavItem.styled";

const NavItems = ({ title, buttonTitle, onClick }) => {
  return (
    <S.Container onClick={onClick}>
      <S.Title>{title}</S.Title>
      <S.Button>{buttonTitle}</S.Button>
    </S.Container>
  );
};

export default NavItems;
