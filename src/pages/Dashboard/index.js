import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getCategories } from "../../services/api";
import Categories from "./components/Categories/index";

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
      const res = await getCategories();
      setData(res);
    }
    fetchCategories();
  }, []);

  return (
    <StyledDashboard>
      <Categories data={data} />
    </StyledDashboard>
  );
};

export default Home;
