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

const Dashboard = ({ data }) => {
  return (
    <StyledDashboard>
      <Categories data={data} />
    </StyledDashboard>
  );
};

export default Dashboard;
