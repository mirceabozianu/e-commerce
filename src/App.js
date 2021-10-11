import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import Dashboard from "pages/Dashboard";
import SignIn from "pages/Auth/SignIn";
import Register from "pages/Auth/Register";
import Products from "pages/Products";
import NavBar from "components/common/layouts/NavBar";
import history from "services/history";
import { setCategories } from "state/categories/actions";

const App = ({ categories, setCategories }) => {
  useEffect(() => {
    setCategories();
  }, [setCategories]);

  const navBarData = [
    {
      key: "home",
      name: "Home",
      path: "/",
    },
    {
      key: "categories",
      name: "Categories",
      path: "/categories",
      children: categories,
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
  ];

  return (
    <Router history={history}>
      <NavBar data={navBarData} />
      <Switch>
        <Route path="/" exact>
          <Dashboard categories={categories} />
        </Route>
        <Route path="/electronics" exact>
          <Products category={"electronics"} />
        </Route>
        <Route path="/jewelery" exact>
          <Products category={"jewelery"} />
        </Route>
        <Route path="/men's clothing" exact>
          <Products category={"men's clothing"} />
        </Route>
        <Route path="/women's clothing" exact>
          <Products category={"women's clothing"} />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
};

export default connect(
  (state) => ({
    categories: state.categories.categories,
  }),
  { setCategories }
)(App);
