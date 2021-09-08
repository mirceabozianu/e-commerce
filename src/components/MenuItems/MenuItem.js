import React from "react";
import styled from "styled-components";

const StyledMenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  margin: 0 7.5px 15px;
  background-position-y: center;
  background-size: cover;
`;
const ContentWrapper = styled.div`
  padding: 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border: 1px solid black;
  color: white;
  h1 {
    font-size: 22px;
    margin-bottom: 6px;
  }
  p {
    font-size: 16px;
  }
`;

const MenuItem = ({ category, imageSrc }) => {
  return (
    <StyledMenuItem style={{ backgroundImage: `url(${imageSrc})` }}>
      <ContentWrapper>
        <h1>{category.toUpperCase()}</h1>
        <p>WINDOW SHOP</p>
      </ContentWrapper>
    </StyledMenuItem>
  );
};

export default MenuItem;
