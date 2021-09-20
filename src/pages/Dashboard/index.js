import React from "react";
import styled from "styled-components";
import Categories from "./components/Categories/index";

const StyledDashboard = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dashboard = ({ categories }) => {
  return (
    <StyledDashboard>
      <Categories categories={categories} />
    </StyledDashboard>
  );
};

export default Dashboard;
