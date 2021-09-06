import React from "react";
import MenuItem from "./MenuItem";
import styled from "styled-components";
import electronics from "../../assets/ItemImages/electronics.jpeg";
import jewelery from "../../assets/ItemImages/jewelery.jpeg";
import men from "../../assets/ItemImages/men.jpeg";
import women from "../../assets/ItemImages/women.jpeg";

const StyledMenu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px 80px;
`;

const images = [electronics, jewelery, men, women];

const Menu = ({ data }) => {
  return (
    <StyledMenu>
      {data.map((category, index) => (
        <MenuItem category={category} imageSrc={images[index]} />
      ))}
    </StyledMenu>
  );
};

export default Menu;
