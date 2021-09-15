import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../../../pages/Dashboard/components/Logo/index";
import Dropdown from "../../Dropdown";

const StyledNavBar = styled.header`
  padding: 0px 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-height: 64px;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  background-color: #4e5863;
  color: white;
  a {
    color: white;
    text-decoration: none;
  }
`;

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
`;

const NavigationListItem = styled.li`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 14px;
  padding: 20px 30px;
`;

const NavBar = ({ data }) => {
  return (
    <StyledNavBar>
      <Logo />
      <NavigationList>
        <NavigationListItem>
          <Link to="/">Home</Link>
        </NavigationListItem>
        <NavigationListItem>
          <Dropdown data={data} name="Categories" trigger="hover" />
        </NavigationListItem>
        <NavigationListItem>
          <Link to="/signin">Sign in</Link>
        </NavigationListItem>
        <NavigationListItem>
          <Link to="/register">Register</Link>
        </NavigationListItem>
      </NavigationList>
    </StyledNavBar>
  );
};
export default NavBar;
