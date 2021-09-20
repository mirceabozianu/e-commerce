import React from "react";
import styled from "styled-components";

const StyledCategories = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px 80px;
`;
const StyledCategory = styled.div`
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
  background-image: ${(props) => `url(${props.imageSrc})`};
`;
const ContentWrapper = styled.div`
  padding: 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  h1 {
    font-size: 23px;
    margin-bottom: 20px;
  }
  a {
    padding: 5px 10px;
    border: 1px solid white;
    color: white;
    text-decoration: none;
    font-size: 15px;
    :hover {
      background-color: rgba(165, 224, 219, 0.5);
    }
  }
`;

const Category = ({ name, url, imageSrc }) => {
  return (
    <StyledCategory imageSrc={imageSrc}>
      <ContentWrapper>
        <h1>{name.toUpperCase()}</h1>
        <a href={url}>WINDOW SHOP</a>
      </ContentWrapper>
    </StyledCategory>
  );
};

const Categories = ({ categories }) => {
  if (!categories?.length) return "Loading...";

  return (
    <StyledCategories>
      {categories?.map((category) => (
        <Category key={category.id} {...category} />
      ))}
    </StyledCategories>
  );
};

export default Categories;
