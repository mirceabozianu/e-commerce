import React, { useState, useEffect } from "react";
import Menu from "./components/Categories/index";
import styled from "styled-components";
import { getCategories } from "../../services/api";

const StyledDashboard = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchCategories() {
      let res = await getCategories();
      setData(res);
    }
    fetchCategories();
  }, []);

  return (
    <StyledDashboard>
      <Menu data={data} />
    </StyledDashboard>
  );
};

export default Home;
