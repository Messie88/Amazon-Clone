import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 10px;
  padding: 20px;
  width: 100%;
  min-height: 400px;
  min-width: 100px;
  background: white;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 0);

  img {
    max-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.2);
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
    color: #ff9900;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  align-items: center;
`;
