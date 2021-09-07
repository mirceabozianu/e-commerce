import React, { useState, useEffect } from "react";
import Menu from "../components/MenuItems/Menu";
import styled from "styled-components";
import { getCategories } from "../services/api";

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
    getCategories().then(resp=>setData(resp));
  },[]);

  return (
    <StyledHome>
      <Menu data={data} />
    </StyledHome>
  );
};

export default Home;
