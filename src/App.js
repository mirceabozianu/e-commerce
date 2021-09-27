import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "pages/Dashboard";
import SignIn from "pages/Auth/SignIn";
import Register from "pages/Auth/Register";
import NavBar from "components/common/layouts/NavBar";
import { getCategories } from "services/api";
import { parseCategories } from "utils/parsers";

const App = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function fetchCategories() {
      const res = await getCategories();
      setCategories(res);
    }
    fetchCategories();
  }, []);

  const parsedCategories = useMemo(() => {
    return parseCategories(categories);
  }, [categories]);

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
      children: parsedCategories,
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
    <Router>
      <NavBar data={navBarData} />
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <Dashboard categories={parsedCategories} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
