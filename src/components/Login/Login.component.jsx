import React, { useState } from "react";

import Button from "../Button";
import Input from "./Input";

import * as S from "./Login.styled";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignIn = (e) => {
    e.preventDefault();
  };

  const SignUp = () => {
    console.log("register");
  };

  return (
    <S.Container>
      <S.SubContainer>
        <S.LefSubContainer>
          <S.LefSubContainerTitle>
            Find everthing you love at <strong>Amazon</strong>
          </S.LefSubContainerTitle>
          <S.LefSubContainerParagraph>
            the world's largest <strong>online marketplace</strong>
          </S.LefSubContainerParagraph>
          <h3>New here ?</h3>
          <S.LefSubContainerButton onClick={SignUp}>
            Create your free Amazon account
          </S.LefSubContainerButton>
        </S.LefSubContainer>
        <div>
          <form action="">
            <S.FormTitle>Log in to your account</S.FormTitle>
            <Input
              label="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="form__bottom">
              <Button type="submit" text="Log In" onClick={SignIn} />
              <p>
                <input type="checkbox" name="" id="" required /> By logging in,
                you agree to Amazon CLONE <strong>Conditions of Use </strong>{" "}
                and <strong>Privacy Notice</strong>
              </p>
            </div>
          </form>
        </div>
      </S.SubContainer>
    </S.Container>
  );
};

export default Login;
