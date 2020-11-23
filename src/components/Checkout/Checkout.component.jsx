import React from "react";
import { Link } from "react-router-dom";

import Subtotal from "../Subtotal/Subtotal.component";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../../StateProvider";

import * as S from "./Checkout.styled";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <S.Container>
      <S.CheckoutLeftContainer>
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CD423492668_.jpg"
          alt=""
        />
        <S.ShoppingBasket>
          <S.ShoppingBasketTitle>Your shopping Basket</S.ShoppingBasketTitle>

          <table>
            <S.CheckoutTableHeader>
              <S.CheckoutTableHeaderItem>Items</S.CheckoutTableHeaderItem>
              <S.CheckoutTableHeaderItem>Description</S.CheckoutTableHeaderItem>
              <S.CheckoutTableHeaderItem>Price</S.CheckoutTableHeaderItem>
              <S.CheckoutTableHeaderItem>Quantity</S.CheckoutTableHeaderItem>
              <S.CheckoutTableHeaderItem></S.CheckoutTableHeaderItem>
            </S.CheckoutTableHeader>
            {basket.length > 0 ? (
              <tbody>
                {basket.map((item) => (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}
              </tbody>
            ) : (
              <S.EmptyBasket>
                <p>
                  Your basket has no items. <Link to="/">Go shop</Link>
                </p>
              </S.EmptyBasket>
            )}
          </table>
        </S.ShoppingBasket>
      </S.CheckoutLeftContainer>
      <S.CheckoutRightContainer>
        <Subtotal />
      </S.CheckoutRightContainer>
    </S.Container>
  );
};

export default Checkout;
