import React, { useState, useEffect } from "react";
import Menu from "../components/MenuItems/Menu";
import styled from "styled-components";

const StyledHome = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <StyledHome>
      <Menu data={data} />
    </StyledHome>
  );
};

export default Home;
