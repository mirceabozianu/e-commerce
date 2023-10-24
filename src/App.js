import React, { useEffect } from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from "services/history";

import Layout from "components/layout";

const App = () => {
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
      <Layout>
        <Switch>
          {/* <Route path="/" exact>
            <Dashboard />
          </Route> */}
          {/* <Route path="/signin">
            <SignIn />
          </Route> */}
          {/* <Route path="/register">
            <Register />
          </Route> */}
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
