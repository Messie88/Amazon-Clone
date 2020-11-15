import React from "react";

import * as S from "./NavItem.styled";

const NavItems = ({ title, buttonTitle }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Button>{buttonTitle}</S.Button>
    </S.Container>
  );
};

export default NavItems;
