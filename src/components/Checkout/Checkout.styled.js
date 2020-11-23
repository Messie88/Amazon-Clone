import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 50px 100px;
  height: 100%;
  position: relative;
`;

export const CheckoutLeftContainer = styled.div`
  margin-right: 20px;
  width: 80%;

  table {
    width: 100%;
    padding: 0px 40px;
    background: white;
    border-radius: 5px;

    td {
      width: 100%;

      &:last-child {
        text-align: end;
      }
    }
  }

  img {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const ShoppingBasket = styled.div``;

export const ShoppingBasketTitle = styled.h2`
  margin-right: 10px;
  padding: 10px;
`;

export const CheckoutRightContainer = styled.div`
  position: fixed;
  right: 50px;
  top: 110px;
`;

export const CheckoutTableHeader = styled.div`
  display: flex;
  justify-content: space-around;
  color: #a9a8a8;
  padding: 30px 0;
`;

export const CheckoutTableHeaderItem = styled.div`
  width: 25%;
  padding-left: 10px;
`;

export const EmptyBasket = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 0.3px solid #a9a8a8;
  color: #ff9900;
`;
