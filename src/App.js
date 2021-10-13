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
        <Route
          path="/"
          exact
          component={() => <Dashboard categories={categories} />}
        />
        <Route path="/products/:category" component={Products} />
        <Route path="/signin" component={SignIn} />
        <Route path="/register" component={Register} />
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
