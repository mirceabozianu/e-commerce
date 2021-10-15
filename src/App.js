import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import Dashboard from "pages/Dashboard";
import SignIn from "pages/Auth/SignIn";
import Register from "pages/Auth/Register";
import Products from "pages/Products";
import ProductDetails from "pages/ProductDetails";
import NavBar from "components/common/layouts/NavBar";
import history from "services/history";
import { setCategories } from "state/categories/actions";
import { setProducts } from "state/products/actions";

const App = ({ categories, setCategories, setProducts }) => {
  useEffect(() => {
    setCategories();
    setProducts();
  }, [setCategories, setProducts]);

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
        <Route path="/products/:category" component={Products} exact />
        <Route
          path="/products/:category/:id"
          component={ProductDetails}
          exact
        />
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
  { setCategories, setProducts }
)(App);
