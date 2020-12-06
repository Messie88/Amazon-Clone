import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

import NavItem from "./NavItem";
import { useStateValue } from "../../StateProvider";
import Input from "../Login/Input";
import { auth } from "../../firebase";

import * as S from "./Header.styled";

import { getTotalItems } from "../../reducer";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => window.removeEventListener("scroll", () => {});
  }, []);

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <S.Container className={`${show && "bg"}`}>
      <Link to="/">
        <S.Logo
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon png logo vector"
        />
      </Link>
      <S.SearchContainer>
        {/* <S.Input type="text" placeholder="Search for anything" /> */}
        <Input label="Search for anything" type="text" />
        <SearchIcon className="header_searchIcon" />
      </S.SearchContainer>

      <S.Nav>
        <Link to={!user && "/login"}>
          <NavItem
            onClick={handleAuth}
            title="Hello Guest"
            buttonTitle={user ? "Sign Out" : "Sign in"}
          />
        </Link>
        <NavItem title="Returns" buttonTitle="& Orders" />
        <NavItem title="Your" buttonTitle="Prime" />

        <Link to="/checkout">
          <S.ShoppingCartContainer>
            <ShoppingCartIcon />
            <S.ShoppingCartCountItems>
              {getTotalItems(basket)}
            </S.ShoppingCartCountItems>
          </S.ShoppingCartContainer>
        </Link>
      </S.Nav>
    </S.Container>
  );
};

export default Header;
