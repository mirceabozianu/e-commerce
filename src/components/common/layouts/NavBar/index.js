import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import Logo from "pages/Dashboard/components/Logo";
import Dropdown from "components/common/Dropdown";
import { setCategories } from "state/categories/actions";

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

const NavBar = ({ data, setCategories }) => {
  useEffect(() => {
    setCategories();
  }, [setCategories]);
  return (
    <StyledNavBar>
      <Logo />
      <NavigationList data={data}>
        {data.map((item) => (
          <NavigationListItem key={item.key}>
            {item.children ? (
              <Dropdown data={item.children} name={item.name} trigger="hover" />
            ) : (
              <Link to={item.path}>{item.name}</Link>
            )}
          </NavigationListItem>
        ))}
      </NavigationList>
    </StyledNavBar>
  );
};
export default connect(
  (state) => {
    return {
      data: [
        {
          key: "home",
          name: "Home",
          path: "/",
        },
        {
          key: "categories",
          name: "Categories",
          path: "/categories",
          children: state.categories.categories,
        },
        {
          key: "signIn",
          name: "Sign In",
          path: "/signin",
        },
        {
          key: "register",
          name: "Register",
          path: "/register",
        },
      ],
    };
  },
  { setCategories }
)(NavBar);
