import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all ease-in-out 0.3s;

  a {
    text-decoration: none;
    color: black;
  }

  &.bg {
    background: rgba(234, 237, 237);
    width: 100%;
  }
`;

export const Logo = styled.img`
  width: 100px;
  object-fit: contain;
  margin: 0 20px;
  margin-top: 10px;
`;

export const SearchContainer = styled.div`
  color: white;
  display: flex;
  flex: 0.8;
  align-items: center;
  border-radius: 24px;
  border: 1px solid #ff9900;
  overflow: hidden;

  .header_searchIcon {
    padding: 5.5px;
    height: 22px;
    background: #ff9900;
  }
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  height: 12px;
  padding: 10px;
  background: transparent;
  border: none;
  outline: none;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const ShoppingCartContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 2px;
  margin-right: 10px;
`;

export const ShoppingCartCountItems = styled.span`
  position: absolute;
  background: red;
  top: -5px;
  right: -5px;
  font-size: 10px;
  font-weight: bolder;
  height: 15px;
  width: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
