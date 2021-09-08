import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from "./components/Logo/Logo";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import { NavBar, NavUl, NavLi } from "./styled/Styles";

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
};

export default App;
