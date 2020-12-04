import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Button from "../Button";
import Input from "./Input";
import { auth } from "../../firebase";

import * as S from "./Login.styled";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);

  const SignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => history.push("/"))
      .catch((error) => alert(error.message));
  };

  const SignUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => console.log(auth))
      .catch((error) => {
        setPasswordErr(true);
        alert(error.message);
      });

    if (auth) {
      history.push("/");
    }
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
            {passwordErr && <p>Password shoud have at least 6 characters</p>}
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
