import React from "react";
import styled from "styled-components";
import Categories from "pages/Dashboard/components/Categories";
import Showcase from "./components/Showcase";

const StyledDashboard = styled.div`
  width: 100%;
  height: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`;

const Dashboard = () => {
  return (
    <StyledDashboard>
      <Categories />
      <Showcase title={"Electronics"} category={"electronics"} />
      <Showcase title={"Jewelery"} category={"jewelery"} />
      <Showcase title={"Men's clothing"} category={"men-clothing"} />
      <Showcase title={"Women's clothing"} category={"women-clothing"} />
    </StyledDashboard>
  );
};

export default Dashboard;
