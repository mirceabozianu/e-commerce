import React, { useMemo } from "react";
import { parseCategories } from "../../../../utils/parsers";
import styled from "styled-components";

const StyledMenu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px 80px;
`;
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

const MenuItem = ({ name, imageSrc }) => {
  return (
    <StyledMenuItem imageSrc={imageSrc}>
      <ContentWrapper>
        <h1>{name.toUpperCase()}</h1>
        <a href={name}>WINDOW SHOP</a>
      </ContentWrapper>
    </StyledMenuItem>
  );
};

const Menu = ({ data }) => {
  const newData = useMemo(() => {
    return parseCategories(data);
  }, [data]);
  if (!newData?.length) return "Loading...";
  return (
    <StyledMenu>
      {newData?.map((obj) => (
        <MenuItem
          key={obj.id}
          name={obj.name}
          url={obj.url}
          imageSrc={obj.imageSrc}
        />
      ))}
    </StyledMenu>
  );
};

export default Menu;
