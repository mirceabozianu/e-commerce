import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import Dashboard from "pages/Dashboard";
import SignIn from "pages/Auth/SignIn";
import Register from "pages/Auth/Register";
import NavBar from "components/common/layouts/NavBar";
import { getCategories } from "services/api";
import { productActions } from "state/state";
import history from "services/history";

const App = () => {
  const categories = useSelector((state) => state.products.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await getCategories();
      dispatch(productActions.setCategories(res));
    };
    fetchCategories();
  }, [dispatch]);

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

export default App;
