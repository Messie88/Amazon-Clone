import React from "react";
import StarIcon from "@material-ui/icons/Star";

import * as S from "./Product.styled";

const Product = ({ title, image, price, rating }) => {
  return (
    <S.Container>
      <S.ProductInfo>
        <div>
          <S.Title>{title}</S.Title>
          <S.Rating>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarIcon className="star" />
              ))}
          </S.Rating>
        </div>
        <div>
          <S.Price>€{price}</S.Price>
        </div>
      </S.ProductInfo>
      <img src={image} alt="" />
      <button>Add to basket</button>
    </S.Container>
  );
};

export default Product;
