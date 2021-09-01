import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import styled from "styled-components";

const NavBar = styled.nav`
list-style: none;

ul {
  width: 120%;
  font-size: 1.3em;
  margin: 0;
  padding: 1.3em;
  import React, { useState } from "react";
    background-color: #06EDBD;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
  }
  li:hover{
    background-color: red;
  }
  Link:visited{
    color: #FF00AC;
  }
`;

const App = () => {




  return (
    <Router>
      <div>
        <NavBar>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/signin">Sign in</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </NavBar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/categories">
            <Categories />
          </Route>
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
