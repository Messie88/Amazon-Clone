import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import NavItem from "./NavItem";

import * as S from "./Header.styled";

const Header = () => {
  return (
    <S.Container>
      <S.Logo
        src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
        alt="amazon png logo vector"
      />
      <S.SearchContainer>
        <S.Input type="text" />
        <SearchIcon className="header_searchIcon" />
      </S.SearchContainer>

      <S.Nav>
        <NavItem title="Hello Guest" buttonTitle="Sign in" />
        <NavItem title="Returns" buttonTitle="& Orders" />
        <NavItem title="Your" buttonTitle="Prime" />
      </S.Nav>

      <S.ShoppingCartContainer>
        <ShoppingCartIcon />
        <S.ShoppingCartCountItems>0</S.ShoppingCartCountItems>
      </S.ShoppingCartContainer>
    </S.Container>
  );
};

export default Header;
