import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  background: url("https://images.unsplash.com/photo-1518797814703-ed31ee241ef8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1001&q=80")
    no-repeat bottom center;
  background-size: cover;
`;

export const SubContainer = styled.div`
  background: rgba(255, 255, 255, 0.75);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 400px;
    padding: 50px;
    border-radius: 5px;
    background: white;

    .form__bottom {
      display: flex;
      width: 100%;
      justify-content: space-around;
    }

    p {
      margin: 0;
      margin-bottom: 20px;
      color: #373837;
      font-size: 12px;
    }
  }
`;

export const LefSubContainer = styled.div`
  margin-right: 100px;

  p,
  h3 {
    color: #373837;
  }

  h3 {
    margin-top: 100px;
  }
`;

export const LefSubContainerTitle = styled.p`
  margin: 0;
  font-size: 2.3rem;
`;

export const LefSubContainerParagraph = styled.p`
  margin: 0;
  font-size: 2rem;
  font-style: italic;
`;

export const LefSubContainerButton = styled.div`
  padding: 15px 30px;
  background: #91b4ed;
  max-width: 250px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-weight: bolder;
  font-size: 14px;

  &:hover {
    background: #669cf2;
  }
`;

export const SignIn = styled.div`
  padding: 20px 40px;
  background: #91b4ed;

  button {
    cursor: pointer;
    border: none;
    background: none;
    border-bottom: 1px solid black;
    padding: 0;
    font-size: 1rem;
    margin-left: 10px;
  }
`;

export const FormTitle = styled.h3`
  margin: 0 0 30px 0;
  font-size: 1.5rem;
`;

export const InputContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

export const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  outline: none;
  border: 1px solid #91b4ed;
  background: #91b4ed;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  padding-right: 30px;
  cursor: pointer;

  &:hover {
    background: #669cf2;

    img {
      left: 0;
    }
  }

  img {
    height: 20px;
    object-fit: contain;
    margin-right: 10px;
    position: relative;
    left: -30px;
    transition: all 0.2s ease-in-out;
  }
`;
