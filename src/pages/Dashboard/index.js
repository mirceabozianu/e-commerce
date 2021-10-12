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

const Dashboard = ({ categories }) => {
  return (
    <StyledDashboard>
      <Categories categories={categories} />
      <Showcase />
    </StyledDashboard>
  );
};

export default Dashboard;
