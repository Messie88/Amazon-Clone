import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: flex-end; */
  margin: 10px;
  padding: 20px;
  width: 100%;
  max-height: 400px;
  min-width: 100px;
  background: white;

  img {
    max-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
  }

  button {
    background: rgb(255, 215, 0);
    color: #111;
    padding: 10px 20px;
    border: none;
    text-transform: uppercase;
    margin-top: 10px;
    cursor: pointer;
  }
`;

export const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* height: 100px; */
  margin-bottom: 15px;
  margin-top: 0;

  p {
    margin: 5px;
  }
`;

export const Title = styled.p`
  margin-top: 0;
`;

export const Price = styled.p`
  font-weight: bold;
`;

export const Rating = styled.p`
  .star {
    font-size: 15px;
    color: rgb(255, 215, 0);
  }
`;
