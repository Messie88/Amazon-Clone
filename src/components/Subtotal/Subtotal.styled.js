import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 250px;
  min-height: 100px;
  padding: 50px 20px;
  background: white;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0), 5px 5px 30px rgba(0, 0, 0, 0.12);

  div {
    width: 250px;
    padding-left: 40px;

    p {
      color: rgb(101, 101, 102);
      margin-top: 0;

      strong {
        color: black;
      }
    }
  }
`;
