import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import Logo from "./components/Logo/Logo";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import styled from "styled-components";

const NavBar = styled.header`
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

const NavUl = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
`;

const NavLi = styled.li`
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

const App = () => {
  return (
    <Router>
      <div>
        <NavBar>
          <Logo />
          <NavUl>
            <NavLi>
              <Link to="/">Home</Link>
            </NavLi>
            <NavLi>
              <Categories>Categories</Categories>
            </NavLi>
            <NavLi>
              <Link to="/signin">Sign in</Link>
            </NavLi>
            <NavLi>
              <Link to="/register">Register</Link>
            </NavLi>
          </NavUl>
        </NavBar>

        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );

  // <Nav>
  //   <Home/>
  //   <Categories/> /*Dropdown menu with clickables*/
  //   <Authentification/>
  // </Nav>
  //<CardList items={this.state.products} />
};

export default App;
