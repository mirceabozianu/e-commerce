import React from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  word-wrap: break-word;
  height: 350px;
  width: 250px;
  margin: 10px;
  padding: 20px;
  border: 2px solid black;
  border-radius: 10px;
`;
const StyledImage = styled.img`
  height: auto;
  width: 100px;
  padding: 20px 0px;
`;
const StyledPrice = styled.div`
  position: relative;
  padding: 20px;
`;

const ItemCard = ({ title, image, price }) => {
  return (
    <StyledItem>
      <div>
        <StyledImage src={image} />
      </div>
      <div>{title}</div>
      <StyledPrice>${price}</StyledPrice>
      <button>Add to Cart</button>
    </StyledItem>
  );
};

export default ItemCard;
