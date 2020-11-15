import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background: #131921;
  color: white;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Logo = styled.img`
  width: 100px;
  object-fit: contain;
  margin: 0 20px;
  margin-top: 10px;
`;

export const SearchContainer = styled.div`
  width: 100%;
  color: white;
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 24px;

  .header_searchIcon {
    padding: 5px;
    height: 22px;
    background: #cd9042;
  }
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  height: 12px;
  padding: 10px;
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
