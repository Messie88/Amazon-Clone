import React from "react";
import StarIcon from "@material-ui/icons/Star";
import CloseIcon from "@material-ui/icons/Close";

import { useStateValue } from "../../../StateProvider";
// import { getTotalPerItem } from "../../../reducer";

import * as S from "./CheckoutProduct.styled";

const CheckoutProduct = ({ id, image, title, price, rating, quantity }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({ type: "REMOVE_FROM_BASKET", id: id });
  };
  return (
    <S.Container>
      <td>
        <img src={image} alt="" />
      </td>
      {/* <S.InfoSection> */}
      <td>
        <S.Title>{title}</S.Title>
        <S.Rating>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="star" key={i} />
            ))}
        </S.Rating>
      </td>
      <td>
        <S.Price>
          <small>€ </small>
          <strong>{price}</strong>
        </S.Price>
      </td>
      <td>
        <p>{quantity}</p>
      </td>
      <td>
        <S.DeleteButton onClick={removeFromBasket}>
          <CloseIcon />
        </S.DeleteButton>
      </td>

      {/* </S.InfoSection> */}
    </S.Container>
  );
};

export default CheckoutProduct;
