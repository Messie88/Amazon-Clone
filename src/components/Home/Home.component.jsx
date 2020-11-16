import React from "react";

import Product from "../Product";

import * as S from "./Home.styled";

const Home = () => {
  return (
    <S.Container>
      <S.Hero>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </S.Hero>
      <S.Row>
        <Product
          id="12321341"
          title="The lean startup"
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          price={12.9}
          rating={5}
        />
        <Product
          id="49538094"
          title="Samsung LC49 49' Curved LED Gaming Monitor"
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX450_.jpg"
          price={239.0}
          rating={4}
        />
      </S.Row>
      <S.Row>
        <Product
          id="23445930"
          title="Amazon echo (3rd generation) | Smart speaker with alexa, charcoal Fabric"
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          price={98.99}
          rating={4}
        />
        <Product
          id="3254354345"
          title="The lean startup"
          image="https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          price={12.9}
          rating={5}
        />
        <Product
          id="12321341"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, - Silver (4th generation)"
          image="https://images-eu.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          price={598.9}
          rating={4}
        />
      </S.Row>
      <S.Row>
        <Product
          id="2344593"
          title="Samsung LC49RG90SSUXEN 49' curved LEd Gaming monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          image="https://images-eu.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          price={1094.98}
          rating={4}
        />
      </S.Row>
    </S.Container>
  );
};

export default Home;
