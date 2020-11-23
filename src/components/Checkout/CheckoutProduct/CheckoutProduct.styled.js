import styled from "styled-components";

export const Container = styled.tr`
  display: flex;

  td {
    padding: 20px 10px;
    border-top: 0.2px solid rgba(214, 212, 212, 0.8);
    width: 100%;
  }

  img {
    width: 180px;
    height: 180px;
    object-fit: contain;
  }
`;

export const Title = styled.p`
  font-weight: bolder;
  color: #1b1d1f;
`;

export const Price = styled.p``;

export const Rating = styled.div`
  .star {
    font-size: 15px;
    color: #ff9900;
  }
`;

export const DeleteButton = styled.button`
  border: none;
  background: none;
  font-size: 1.2rem;
  margin-top: 13px;
  color: #a9a8a8;
  cursor: pointer;
  outline: none;
`;
