import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import Dashboard from "pages/Dashboard";
import SignIn from "pages/Auth/SignIn";
import Register from "pages/Auth/Register";
import NavBar from "components/common/layouts/NavBar";
import history from "services/history";
import { getCategories } from "services/api";
import { setCategories } from "state/categories/actions";
import { parseCategories } from "utils/parsers";

const App = ({ categories, setCategories }) => {
  useEffect(() => {
    const fetchCategories = async () => {
      const resp = await getCategories();
      const parsedResp = parseCategories(resp);
      setCategories(parsedResp);
    };
    fetchCategories();
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
