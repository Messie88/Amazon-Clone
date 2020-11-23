import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

import NavItem from "./NavItem";
import { useStateValue } from "../../StateProvider";

import * as S from "./Header.styled";

import { getTotalItems } from "../../reducer";

const Header = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <S.Container>
      <Link to="/">
        <S.Logo
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="amazon png logo vector"
        />
      </Link>
      <S.SearchContainer>
        <S.Input type="text" placeholder="Search for anything" />
        <SearchIcon className="header_searchIcon" />
      </S.SearchContainer>

      <S.Nav>
        <NavItem title="Hello Guest" buttonTitle="Sign in" />
        <NavItem title="Returns" buttonTitle="& Orders" />
        <NavItem title="Your" buttonTitle="Prime" />
      </S.Nav>

      <Link to="/checkout">
        <S.ShoppingCartContainer>
          <ShoppingCartIcon />
          <S.ShoppingCartCountItems>
            {getTotalItems(basket)}
          </S.ShoppingCartCountItems>
        </S.ShoppingCartContainer>
      </Link>
    </S.Container>
  );
};

export default Header;
