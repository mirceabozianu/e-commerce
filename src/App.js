import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import Logo from "./components/Logo/Logo";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import styled from "styled-components";
import {auth, createUserProfileDocument} from "./firebase/utils/index";

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

const Ul = styled.ul`
  list-style: none;
`;

const Li = styled.button`
  display: inline-block;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;
  color: white;
  margin: 0px 5px;
  width: 150px;
  padding: 9px 25px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  background-color: rgba(97, 132, 152, 1);
  :hover {
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
  const [token, setToken] = useState();

  // if(!token) {
  // //   return <SignIn setToken={setToken}/>
  // // }
  return (
    <Router>
      <div>
        <NavBar>
          <Logo />
          <Ul>
            <Li>
              <Link to="/">Home</Link>
            </Li>
            <Li>
              <Link to="/categories">Categories</Link>
            </Li>
            <Li>
              <Link to="/signin">Sign in</Link>
            </Li>
            <Li>
              <Link to="/register">Register</Link>
            </Li>
          </Ul>
        </NavBar>

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
