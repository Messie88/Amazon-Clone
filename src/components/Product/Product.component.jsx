import React from "react";
import StarIcon from "@material-ui/icons/Star";

import Button from "../Button";
import { useStateValue } from "../../StateProvider";

import * as S from "./Product.styled";

const Product = ({ id, title, image, price, rating }) => {
  const [basket, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <S.Container>
      <S.ProductInfo>
        <div>
          <S.Title>{title}</S.Title>
          <S.Rating>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarIcon className="star" key={i} />
              ))}
          </S.Rating>
        </div>
        <div>
          <S.Price>€{price}</S.Price>
        </div>
      </S.ProductInfo>
      <img src={image} alt="" />
      <S.ButtonContainer>
        <Button onClick={addToBasket} text="Add to basket" />
      </S.ButtonContainer>
    </S.Container>
  );
};

export default Product;
