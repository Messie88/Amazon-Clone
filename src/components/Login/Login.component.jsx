import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Button from "../Button";
import Input from "./Input";
import { auth, signInWithGoogle } from "../../firebase";

import * as S from "./Login.styled";

const Login = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);

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
      .then((auth) => alert(auth))
      .catch((error) => {
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
          <S.LefSubContainerButton onClick={() => setIsSignup(true)}>
            Create your free Amazon account
          </S.LefSubContainerButton>
        </S.LefSubContainer>
        <div>
          {isSignup && (
            <S.SignIn>
              Want to login ?{" "}
              <button onClick={() => setIsSignup(false)}>Sign In</button>
            </S.SignIn>
          )}
          <form action="">
            <S.FormTitle>Log in to your account</S.FormTitle>
            {isSignup && (
              <S.InputContainer>
                <Input
                  label="First Name"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </S.InputContainer>
            )}
            {isSignup && (
              <S.InputContainer>
                <Input
                  label="Last Name"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </S.InputContainer>
            )}
            <S.InputContainer>
              <Input
                label="Email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </S.InputContainer>
            <S.InputContainer>
              <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </S.InputContainer>
            <p>
              <input type="checkbox" name="" id="" required /> By logging in,
              you agree to Amazon CLONE <strong>Conditions of Use </strong> and{" "}
              <strong>Privacy Notice</strong>
            </p>
            <div className="form__bottom">
              <Button
                type="submit"
                text={isSignup ? "Sign Up" : "Log In"}
                onClick={isSignup ? SignUp : SignIn}
              />
              <S.GoogleButton onClick={signInWithGoogle}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt=""
                />
                Sign in with Google
              </S.GoogleButton>
            </div>
          </form>
        </div>
      </S.SubContainer>
    </S.Container>
  );
};

export default Login;
