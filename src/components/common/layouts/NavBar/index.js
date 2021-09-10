import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../../../pages/Dashboard/components/Logo/index";
import DropdownMenu from "../../Dropdown/index";

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
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
`;

const StyledLi = styled.li`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;
  color: white;
  padding: 20px 30px;
  margin :hover {
    transition: 0.3s;
    color: black;
    background-color: rgba(0, 136, 169, 0.7);
  }
  a {
    color: white;
    text-decoration: none;
  }
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <Logo />
      <StyledUl>
        <StyledLi>
          <Link to="/">Home</Link>
        </StyledLi>
        <StyledLi>
          <DropdownMenu>Categories</DropdownMenu>
        </StyledLi>
        <StyledLi>
          <Link to="/signin">Sign in</Link>
        </StyledLi>
        <StyledLi>
          <Link to="/register">Register</Link>
        </StyledLi>
      </StyledUl>
    </StyledNavBar>
  );
};
export default NavBar;
