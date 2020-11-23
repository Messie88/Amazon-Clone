import React from "react";
import CurrencyFormat from "react-currency-format";

import Button from "../Button";
import { useStateValue } from "../../StateProvider";
import { getBasketTotalPrice } from "../../reducer";

import * as S from "./Subtotal.styled";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <S.Container>
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small>
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotalPrice(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€ "}
      />
      {/* <div style={{ margin: "10px auto" }}> */}
      <Button text="Proceed to checkout" />
      {/* </div> */}
    </S.Container>
  );
};

export default Subtotal;
